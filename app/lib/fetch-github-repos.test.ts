import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchGitHubRepos } from "./fetch-github-repos";

const repo = (id: number, fork = false) => ({
  id,
  name: `repo-${id}`,
  html_url: `https://github.com/user/repo-${id}`,
  description: null,
  language: null,
  stargazers_count: 0,
  updated_at: "2026-01-01T00:00:00Z",
  fork,
});

const mockFetch = (impl: () => Promise<Response>) => {
  const fetchMock = vi.fn(impl);
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
};

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("fetchGitHubRepos", () => {
  it("returns validated, non-fork repos and requests the encoded user URL with revalidation", async () => {
    const fetchMock = mockFetch(async () =>
      Response.json([repo(1), repo(2, true), { bogus: true }, repo(3)])
    );

    const result = await fetchGitHubRepos("some user");

    expect(result).toEqual({ ok: true, repos: [repo(1), repo(3)] });
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit & { next: unknown }];
    expect(url).toBe(
      "https://api.github.com/users/some%20user/repos?sort=updated&per_page=12"
    );
    expect(init.next).toEqual({ revalidate: 3600 });
  });

  it("returns an error result for a non-OK response", async () => {
    mockFetch(async () => new Response("rate limited", { status: 403 }));

    expect(await fetchGitHubRepos("user")).toEqual({
      ok: false,
      error: "GitHub API error: 403",
    });
  });

  it("returns an error result when the payload is not an array", async () => {
    mockFetch(async () => Response.json({ message: "Not Found" }));

    expect(await fetchGitHubRepos("user")).toEqual({
      ok: false,
      error: "Unexpected response from GitHub API",
    });
  });

  it("returns an error result when the request or JSON parsing throws", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    mockFetch(async () => new Response("not json", { status: 200 }));

    const result = await fetchGitHubRepos("user");

    expect(result.ok).toBe(false);
  });

  it("handles non-Error rejections", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    mockFetch(() => Promise.reject("offline"));

    expect(await fetchGitHubRepos("user")).toEqual({
      ok: false,
      error: "Unknown error",
    });
  });
});
