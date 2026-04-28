# CLAUDE.md — repo memory for the inikolaev.tech CV

This file is read on every Claude session in this repo. Keep it short and accurate.

## Goal

Personal CV at <https://inikolaev.tech>, fast and minimal:

- Single-page CV in two locales: **EN at `/`**, **RU at `/ru/`**.
- Light + dark theme, persisted, no FOUC.
- Downloadable PDF in nav and on the contact card (locale-aware).
- Loads as fast as possible — statically exported, almost no JS.

## Hard rules

- **Everything runs through Docker.** Never invoke `pnpm`, `node`, `next` on the host. Local dev, build, lint, prod-test, CI build — all `docker compose ...` (see Quickstart).
- **Don't add a UI framework or CSS-in-JS.** Design tokens live in `src/styles/globals.css`; light theme is just `[data-theme="light"]` overrides. Adding Tailwind/Emotion/etc. is out of scope.
- **Static export only.** `next.config.ts` has `output: "export"`; nothing that requires a Node runtime at request time (no API routes, no `revalidate`, no middleware that needs SSR).
- **Don't commit/push or take destructive shared-state actions without explicit user approval.**

## Stack

- Next.js 16 (App Router, RSC, Turbopack) + TypeScript + React 19.
- `next-themes` for theme toggle. `next/font/google` (Inter, Inter Tight, JetBrains Mono with `cyrillic` subset).
- pnpm 10 (lockfile committed; pnpm only runs inside containers).
- nginx:1.27-alpine for prod runtime; Traefik (already on the server) for TLS + routing.

## Quickstart

| Goal                      | Command                                                  |
| ------------------------- | -------------------------------------------------------- |
| Hot-reload dev on `:3000` | `docker compose --profile dev up`                        |
| Static build → `./out`    | `docker compose --profile build run --rm build`          |
| Type-check                | `docker compose --profile lint run --rm lint`            |
| Local prod on `:8080`     | `docker compose --profile prod up --build web`           |
| Tear down                 | `docker compose --profile dev --profile prod down`       |

## Project structure

```
.
├── compose.yml                 # local dev/build/lint/prod profiles (docker-only)
├── Dockerfile                  # multi-stage: deps → builder → export → runtime (nginx)
├── Dockerfile.dev              # node+pnpm, used by dev/lint profiles
├── deploy/
│   ├── docker-compose.yml      # server-side: nginx + traefik labels for inikolaev.tech
│   └── nginx.conf              # gzip, immutable cache for /_next/static, html no-cache
├── public/                     # PDFs (Nikolaev_Igor_CV_{EN,RU}.pdf), favicon
├── src/
│   ├── app/                    # layout.tsx + page.tsx (EN) + ru/page.tsx (RU)
│   ├── components/             # server components + client islands (Reveal, HeroOrb, Counter, ThemeToggle, LangSwitch, Nav, HowIWork)
│   ├── content/{en,ru}.ts      # source of truth for all copy; types.ts shapes them
│   ├── lib/locale.ts           # Locale type, pdfHrefFor, altLocaleHref
│   └── styles/globals.css      # tokens (dark default + [data-theme="light"]), all section styles
└── .github/workflows/deploy.yml
```

When editing copy, change `src/content/en.ts` and `src/content/ru.ts` only — components are pure presentational.

## Server: chesswin_server

- IP: **159.65.204.209**.
- Reverse proxy: **Traefik v3.1** at `/opt/traefik`. External docker network: `traefik`. Let's Encrypt resolver name: `le` (http-challenge on `:80`). Shared middlewares file: `/opt/traefik/dynamic/middlewares.yml` (e.g. `secure-headers@file`).
- CV deploy directory: **`/opt/cv/`** containing:
  - `site/` — bind-mounted into the nginx container as `/usr/share/nginx/html` (read-only). Replaced wholesale by each deploy.
  - `docker-compose.yml` — defines the `cv` service (nginx:1.27-alpine), joined to the external `traefik` network with labels for `Host('inikolaev.tech')` + http→https redirect.
  - `nginx.conf` — gzip + cache headers + `try_files $uri $uri.html $uri/`.
- Deploy user: **`github_deploy`** (already exists, in `docker` group, owns `/opt/chesswin`, etc.). Reuse for CV — no new system user.

## Domain & DNS

- Domain: **`inikolaev.tech`**.
- A-record must point to `159.65.204.209`. (At least once during setup this was wrong — domain pointed to 46.21.245.107 and the site showed `ERR_SSL_PROTOCOL_ERROR` because some other host's TLS was answering. If you see SSL errors, check DNS first.)
- Let's Encrypt http-challenge will issue the cert automatically once DNS resolves to our server and the cv container is up — Traefik handles it. No manual cert work.

## Deploy flow

`.github/workflows/deploy.yml` triggered on `push: main` or manual dispatch:

1. Checkout.
2. `docker buildx build --target export --output type=local,dest=./out .` — full pnpm install + `next build` happens inside Docker, layer-cached between runs.
3. Smoke-check `out/{index.html, ru/index.html, Nikolaev_Igor_CV_*.pdf}` exist.
4. SSH config from `secrets.SSH_PRIVATE_KEY` + `secrets.SSH_HOST`.
5. `mkdir -p /opt/cv/site` on the server.
6. `rsync -az --delete out/ → ${SSH_USER}@${SSH_HOST}:/opt/cv/site/`.
7. `rsync deploy/{docker-compose.yml,nginx.conf} → /opt/cv/`.
8. `ssh … 'cd /opt/cv && docker compose pull && docker compose up -d --remove-orphans && docker image prune -f'`.
9. Curl-loop smoke test on `https://inikolaev.tech/`.

### GitHub repo secrets (needed before first deploy)

| Secret            | Value                                                |
| ----------------- | ---------------------------------------------------- |
| `SSH_PRIVATE_KEY` | Private key matching `~github_deploy/.ssh/authorized_keys` on chesswin_server |
| `SSH_HOST`        | `159.65.204.209`                                     |
| `SSH_USER`        | `github_deploy`                                      |

### One-time server prep

```bash
sudo mkdir -p /opt/cv/site
sudo chown -R github_deploy:docker /opt/cv
# DNS A record  inikolaev.tech  →  159.65.204.209  (set at the registrar)
```

## Common diagnostics

- **Browser shows `ERR_SSL_PROTOCOL_ERROR` or wrong cert** → check `dig +short inikolaev.tech` matches `159.65.204.209`. If not, fix DNS at the registrar.
- **502 / connection refused** → `ssh chesswin_server 'docker ps | grep cv'`. If absent, run `cd /opt/cv && docker compose up -d`. If `/opt/cv` is missing, the GH Action hasn't run yet.
- **Cert not issued** → tail Traefik logs: `ssh chesswin_server 'docker logs --tail 100 traefik 2>&1 | grep -i acme'`. Common cause: A record still propagating.
- **Stale assets in browser** → `_next/static/*` is `Cache-Control: public, immutable` (1y) but filenames are content-hashed; HTML is `no-cache`, so a refresh always pulls fresh markup.
