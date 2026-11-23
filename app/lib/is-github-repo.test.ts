import { describe, expect, it } from "vitest";
import { isGitHubRepo } from "./is-github-repo";

const validRepo = {
  id: 1,
  name: "website",
  html_url: "https://github.com/fabriciocunhauk/website",
  description: null,
  language: "TypeScript",
  stargazers_count: 3,
  updated_at: "2026-01-01T00:00:00Z",
  fork: false,
  extra_field: "ignored",
};

describe("isGitHubRepo", () => {
  it("accepts a well-formed repo, including null description/language", () => {
    expect(isGitHubRepo(validRepo)).toBe(true);
    expect(isGitHubRepo({ ...validRepo, language: null })).toBe(true);
  });

  it.each([null, undefined, "repo", 42, []])("rejects non-object %p", (value) => {
    expect(isGitHubRepo(value)).toBe(false);
  });

  it("rejects a repo with a missing field", () => {
    const withoutName: Partial<typeof validRepo> = { ...validRepo };
    delete withoutName.name;
    expect(isGitHubRepo(withoutName)).toBe(false);
  });

  it("rejects a repo with wrongly typed fields", () => {
    expect(isGitHubRepo({ ...validRepo, id: "1" })).toBe(false);
    expect(isGitHubRepo({ ...validRepo, stargazers_count: "3" })).toBe(false);
    expect(isGitHubRepo({ ...validRepo, fork: "false" })).toBe(false);
    expect(isGitHubRepo({ ...validRepo, description: 7 })).toBe(false);
  });

  it("rejects links that do not point to github.com", () => {
    expect(isGitHubRepo({ ...validRepo, html_url: "javascript:alert(1)" })).toBe(false);
    expect(isGitHubRepo({ ...validRepo, html_url: "https://evil.example/repo" })).toBe(false);
  });
});
