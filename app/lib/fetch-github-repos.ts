import { isGitHubRepo, type GitHubRepo } from "./is-github-repo";

export type GitHubReposResult =
  | Readonly<{ ok: true; repos: ReadonlyArray<GitHubRepo> }>
  | Readonly<{ ok: false; error: string }>;

const REVALIDATE_SECONDS = 3600;
const PER_PAGE = 12;

export async function fetchGitHubRepos(
  username: string
): Promise<GitHubReposResult> {
  const url = `https://api.github.com/users/${encodeURIComponent(
    username
  )}/repos?sort=updated&per_page=${PER_PAGE}`;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return { ok: false, error: `GitHub API error: ${response.status}` };
    }

    const data: unknown = await response.json();

    if (!Array.isArray(data)) {
      return { ok: false, error: "Unexpected response from GitHub API" };
    }

    const repos = data.filter(isGitHubRepo).filter((repo) => !repo.fork);

    return { ok: true, repos };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error fetching GitHub repositories:", message);
    return { ok: false, error: message };
  }
}
