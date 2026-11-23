import { afterEach, describe, expect, it, vi } from "vitest";

const loadConfig = async () => {
  vi.resetModules();
  return (await import("./site-config")).SITE_CONFIG;
};

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("SITE_CONFIG", () => {
  it("uses public env overrides when set", async () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_URL", "https://example.test");
    vi.stubEnv("NEXT_PUBLIC_GA_ID", "G-TEST");

    const config = await loadConfig();

    expect(config.baseUrl).toBe("https://example.test");
    expect(config.gaId).toBe("G-TEST");
  });

  it("falls back to production defaults when env is empty", async () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_URL", "");
    vi.stubEnv("NEXT_PUBLIC_GA_ID", "");

    const config = await loadConfig();

    expect(config.baseUrl).toBe("https://fabriciocunha.vercel.app");
    expect(config.gaId).toBe("G-GGEB703MKL");
    expect(Object.isFrozen(config)).toBe(true);
  });
});
