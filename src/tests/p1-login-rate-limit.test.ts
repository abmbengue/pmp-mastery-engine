import { beforeEach, describe, expect, it } from "vitest";
import {
  checkRateLimit,
  resetRateLimitBuckets,
} from "@/modules/security";

describe("P1 login rate limiting", () => {
  beforeEach(() => {
    resetRateLimitBuckets();
  });

  it("allows repeated failures under threshold then blocks", () => {
    const key = "login-email:brute@example.com";
    const limit = 10;
    const windowMs = 15 * 60_000;

    for (let i = 0; i < limit; i++) {
      expect(checkRateLimit(key, limit, windowMs).ok).toBe(true);
    }
    expect(checkRateLimit(key, limit, windowMs).ok).toBe(false);
  });

  it("expires the window and allows login again", () => {
    const key = "login-email:window@example.com";
    const limit = 3;
    const windowMs = 1000;
    const t0 = 1_000_000;

    expect(checkRateLimit(key, limit, windowMs, t0).ok).toBe(true);
    expect(checkRateLimit(key, limit, windowMs, t0 + 1).ok).toBe(true);
    expect(checkRateLimit(key, limit, windowMs, t0 + 2).ok).toBe(true);
    expect(checkRateLimit(key, limit, windowMs, t0 + 3).ok).toBe(false);

    // After window expiry
    expect(checkRateLimit(key, limit, windowMs, t0 + windowMs + 1).ok).toBe(true);
  });

  it("keeps IP and email buckets independent", () => {
    expect(checkRateLimit("login-ip:1.1.1.1", 2, 60_000).ok).toBe(true);
    expect(checkRateLimit("login-ip:1.1.1.1", 2, 60_000).ok).toBe(true);
    expect(checkRateLimit("login-ip:1.1.1.1", 2, 60_000).ok).toBe(false);
    expect(checkRateLimit("login-email:ok@example.com", 2, 60_000).ok).toBe(true);
  });

  it("DISABLE_RATE_LIMIT allows normal login flooding for e2e", () => {
    const prev = process.env.DISABLE_RATE_LIMIT;
    process.env.DISABLE_RATE_LIMIT = "1";
    try {
      for (let i = 0; i < 50; i++) {
        expect(checkRateLimit("login-email:e2e@example.com", 10, 60_000).ok).toBe(true);
      }
    } finally {
      if (prev === undefined) delete process.env.DISABLE_RATE_LIMIT;
      else process.env.DISABLE_RATE_LIMIT = prev;
    }
  });
});
