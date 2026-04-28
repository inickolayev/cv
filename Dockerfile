# syntax=docker/dockerfile:1.7

# ---------- 1. deps: install pnpm + node_modules from lockfile ----------
FROM node:22-alpine AS deps
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.21.0 --activate
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# ---------- 2. builder: produce static export ----------
FROM node:22-alpine AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.21.0 --activate
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# ---------- 3. export: tiny stage that holds just out/ ----------
# (handy for `docker compose run --rm export` to pull artefacts to the host)
FROM alpine:3.20 AS export
WORKDIR /out
COPY --from=builder /app/out/ ./

# ---------- 4. runtime: nginx serving the static export ----------
FROM nginx:1.27-alpine AS runtime
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
