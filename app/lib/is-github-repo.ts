export type GitHubRepo = Readonly<{
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}>;

const isNullableString = (value: unknown): value is string | null =>
  value === null || typeof value === "string";

export function isGitHubRepo(value: unknown): value is GitHubRepo {
  if (typeof value !== "object" || value === null) return false;

  const repo = value as Record<string, unknown>;

  return (
    typeof repo.id === "number" &&
    typeof repo.name === "string" &&
    typeof repo.html_url === "string" &&
    repo.html_url.startsWith("https://github.com/") &&
    isNullableString(repo.description) &&
    isNullableString(repo.language) &&
    typeof repo.stargazers_count === "number" &&
    typeof repo.updated_at === "string" &&
    typeof repo.fork === "boolean"
  );
}
