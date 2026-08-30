#!/usr/bin/env bash
# Idempotent repository bootstrap for the Professional Learning Academy Cloud Agent.
# Installs system + project dependencies and generates the local dev .env.
# Durable, source-derived setup only. Runtime services start in start.sh.
set -euo pipefail

cd "$(dirname "$0")/.."

PG_USER="pla_user"
PG_PASSWORD="pla_dev_password"
PG_DB="pla_dev"

# --- PostgreSQL server (stable system dependency) ---------------------------
if ! command -v pg_ctlcluster >/dev/null 2>&1; then
  echo "[install] Installing PostgreSQL 16..."
  sudo apt-get update -qq
  sudo DEBIAN_FRONTEND=noninteractive apt-get install -y -qq postgresql postgresql-contrib
else
  echo "[install] PostgreSQL already present; skipping apt install."
fi

# --- Node dependencies (runs postinstall -> prisma generate) ----------------
echo "[install] Installing npm dependencies..."
npm ci

# --- Local development environment file -------------------------------------
if [ ! -f .env ]; then
  echo "[install] Creating .env with local dev defaults..."
  AUTH_SECRET="$(openssl rand -hex 32)"
  cat > .env <<EOF
DATABASE_URL="postgresql://${PG_USER}:${PG_PASSWORD}@127.0.0.1:5432/${PG_DB}?schema=public"
AUTH_SECRET="${AUTH_SECRET}"
APP_BASE_URL="http://localhost:3000"
EOF
else
  echo "[install] .env already exists; leaving it untouched."
fi

echo "[install] Done."
