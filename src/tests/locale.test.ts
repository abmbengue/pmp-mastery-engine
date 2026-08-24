import { describe, it, expect } from "vitest";
import { pickLocalized } from "@/shared/types/locale";

describe("locale utilities", () => {
  it("returns French content when locale is fr", () => {
    expect(pickLocalized("Bonjour", "Hello", "fr")).toBe("Bonjour");
  });

  it("returns English content when locale is en", () => {
    expect(pickLocalized("Bonjour", "Hello", "en")).toBe("Hello");
  });
});
