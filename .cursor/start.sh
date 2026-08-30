#!/usr/bin/env bash
# Per-boot reconciliation for the Professional Learning Academy Cloud Agent.
# Starts PostgreSQL, ensures the role/database exist, applies migrations, and
# seeds data. Must tolerate restarts and return once the database is ready.
set -euo pipefail

cd "$(dirname "$0")/.."

PG_USER="pla_user"
PG_PASSWORD="pla_dev_password"
PG_DB="pla_dev"

# --- Start the PostgreSQL cluster (idempotent) ------------------------------
echo "[start] Starting PostgreSQL cluster..."
sudo pg_ctlcluster 16 main start 2>/dev/null || true

echo "[start] Waiting for PostgreSQL to accept connections..."
for _ in $(seq 1 30); do
  if sudo -u postgres pg_isready -q; then break; fi
  sleep 1
done

# --- Ensure role and database exist -----------------------------------------
if ! sudo -u postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='${PG_USER}'" | grep -q 1; then
  echo "[start] Creating role ${PG_USER}..."
  sudo -u postgres psql -c "CREATE USER ${PG_USER} WITH PASSWORD '${PG_PASSWORD}' CREATEDB;"
fi
if ! sudo -u postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='${PG_DB}'" | grep -q 1; then
  echo "[start] Creating database ${PG_DB}..."
  sudo -u postgres psql -c "CREATE DATABASE ${PG_DB} OWNER ${PG_USER};"
fi

# --- Apply migrations -------------------------------------------------------
echo "[start] Applying Prisma migrations..."
npx prisma migrate deploy

# --- Seed data (idempotent: upserts + stable content, safe to re-run) --------
echo "[start] Seeding database..."
npm run db:seed

echo "[start] Database ready on postgresql://${PG_USER}@127.0.0.1:5432/${PG_DB}"
