/**
 * Minimal in-memory rate limiter for Educational MVP hardening.
 * Not a distributed production gateway — prevents obvious abuse on a single instance.
 */

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  retryAfterSec: number;
};

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

/** Test helper — clears all buckets */
export function resetRateLimitBuckets() {
  buckets.clear();
}

/**
 * Fixed-window rate limit.
 * @param key unique key (e.g. `ai-tutor:userId` or `register:ip`)
 * @param limit max requests per window
 * @param windowMs window length
 */
export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number,
  now = Date.now()
): RateLimitResult {
  // Educational MVP: allow disabling for Playwright / local stress runs
  if (process.env.DISABLE_RATE_LIMIT === "1") {
    return { ok: true, remaining: limit, retryAfterSec: 0 };
  }

  const existing = buckets.get(key);
  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfterSec: Math.ceil(windowMs / 1000) };
  }

  if (existing.count >= limit) {
    return {
      ok: false,
      remaining: 0,
      retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  buckets.set(key, existing);
  return {
    ok: true,
    remaining: Math.max(0, limit - existing.count),
    retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
  };
}

export function clientIpFromRequest(request: Request): string {
  const xf = request.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  const real = request.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

/** Safe server log — never dump passwords, hashes, or API keys */
export function safeApiLog(
  event: string,
  meta?: Record<string, string | number | boolean | null | undefined>
) {
  const cleaned: Record<string, string | number | boolean | null> = {};
  if (meta) {
    for (const [k, v] of Object.entries(meta)) {
      const key = k.toLowerCase();
      if (
        key.includes("password") ||
        key.includes("secret") ||
        key.includes("api_key") ||
        key.includes("authorization") ||
        key.includes("hash")
      ) {
        cleaned[k] = "[redacted]";
        continue;
      }
      cleaned[k] = v === undefined ? null : v;
    }
  }
  // intentional structured ops log (no secrets)
  console.info(JSON.stringify({ event, ...cleaned, ts: new Date().toISOString() }));
}
