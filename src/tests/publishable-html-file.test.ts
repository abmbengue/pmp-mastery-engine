import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

describe("publishable PMP HTML file", () => {
  it("ships the standalone HTML file from public with browser-safe metadata", () => {
    const htmlPath = path.join(
      process.cwd(),
      "public",
      "PMP-Mastery-V273-FINAL.html",
    );

    expect(fs.existsSync(htmlPath)).toBe(true);

    const html = fs.readFileSync(htmlPath, "utf8");

    expect(html).toContain("<!doctype html>");
    expect(html).toContain('meta charset="utf-8"');
    expect(html).toContain('http-equiv="X-UA-Compatible" content="IE=edge"');
    expect(html).toContain('name="viewport" content="width=device-width, initial-scale=1"');
    expect(html).toContain("PMP Mastery V273");
    expect(html).toContain('href="./fr"');
    expect(html).toContain('href="./en"');
  });
});
