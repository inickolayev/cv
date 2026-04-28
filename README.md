# inikolaev.tech — CV

Personal CV at <https://inikolaev.tech>. Next.js 16 (App Router) statically exported, two locales (EN at `/`, RU at `/ru/`), light/dark themes, downloadable PDF.

> **Convention:** everything in this repo runs through Docker. No `pnpm`/`node`/`next` is ever invoked on the host. The host only needs Docker (Engine ≥ 24 / Desktop ≥ 4.27) with Compose v2.

## Quickstart

| Goal                     | Command                                                  |
| ------------------------ | -------------------------------------------------------- |
| Hot-reload dev on `:3000`| `docker compose --profile dev up`                        |
| Static build → `./out`   | `docker compose --profile build run --rm build`          |
| Type-check (tsc)         | `docker compose --profile lint run --rm lint`            |
| Local prod test on `:8080` | `docker compose --profile prod up --build web`         |
| Tear everything down     | `docker compose --profile dev --profile prod down`       |

The first `dev` start does `pnpm install` inside the container and then `next dev`; subsequent starts reuse the `cv_node_modules` named volume and boot in seconds.

## How the profiles map to images

- [`Dockerfile.dev`](Dockerfile.dev) — Node 22 alpine + corepack pnpm. Used by `dev` and `lint` profiles, with the source bind-mounted at `/app`.
- [`Dockerfile`](Dockerfile) — multi-stage, used by `build` (target `builder`) and `prod` (target `runtime`):
  - `deps` → `pnpm install` from lockfile, BuildKit-cached pnpm store.
  - `builder` → `next build` → `/app/out`.
  - `export` → only `/out` (used by CI via `buildx --output type=local`).
  - `runtime` → `nginx:1.27-alpine` + [`deploy/nginx.conf`](deploy/nginx.conf) + the static export.

## Editing content

All copy lives in [`src/content/en.ts`](src/content/en.ts) and [`src/content/ru.ts`](src/content/ru.ts), shaped by [`src/content/types.ts`](src/content/types.ts). PDFs in [`public/`](public/) are linked by the “Download CV” buttons.

## Deploy

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. `docker buildx build --target export --output type=local,dest=./out .` — full build inside Docker, layer-cached between runs.
2. `rsync out/` → `chesswin_server:/opt/cv/site/`.
3. `rsync deploy/{docker-compose.yml,nginx.conf}` → `chesswin_server:/opt/cv/`.
4. `ssh … 'cd /opt/cv && docker compose pull && docker compose up -d --remove-orphans'` brings up `nginx:1.27-alpine` joined to the existing `traefik` external network. Traefik handles TLS via Let's Encrypt resolver `le` (already configured in `/opt/traefik`).

### Required GitHub repo secrets

| Secret            | Value                                              |
| ----------------- | -------------------------------------------------- |
| `SSH_PRIVATE_KEY` | Private key authorised on `chesswin_server`        |
| `SSH_HOST`        | Server hostname / IP                               |
| `SSH_USER`        | e.g. `github_deploy` (must own `/opt/cv` + docker) |

### One-time server prep

```bash
sudo mkdir -p /opt/cv/site
sudo chown -R github_deploy:docker /opt/cv
# DNS: A record  inikolaev.tech  →  <server IP>
# Traefik network already exists at /opt/traefik (external network "traefik").
```

## Project layout

```
.
├── compose.yml                 # local dev/build/lint/prod profiles
├── Dockerfile                  # multi-stage prod image (deps → builder → export → runtime)
├── Dockerfile.dev              # node+pnpm image for dev/lint
├── .dockerignore
├── next.config.ts              # output: 'export', trailingSlash, no image opt
├── deploy/
│   ├── docker-compose.yml      # server-side: nginx + traefik labels for inikolaev.tech
│   └── nginx.conf              # gzip, immutable cache for /_next/static, html no-cache
├── public/                     # PDFs and static assets
├── src/
│   ├── app/                    # layout + EN page + ru/page
│   ├── components/             # server components + client islands
│   ├── content/{en,ru,types}.ts
│   ├── lib/locale.ts
│   └── styles/globals.css      # design tokens (dark default + [data-theme="light"])
└── .github/workflows/deploy.yml
```
