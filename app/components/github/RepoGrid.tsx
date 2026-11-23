import RepoCard from "./RepoCard";
import { fetchGitHubRepos } from "@/app/lib/fetch-github-repos";
import { SITE_CONFIG } from "@/app/lib/site-config";

const MAX_REPOS = 7;

export default async function RepoGrid() {
  const result = await fetchGitHubRepos(SITE_CONFIG.githubUsername);

  if (!result.ok) {
    return (
      <p className="text-lg text-red-400 text-center">
        Failed to load GitHub repositories: {result.error}
      </p>
    );
  }

  if (result.repos.length === 0) {
    return (
      <p className="text-lg text-gray-200 text-center">
        No public repositories found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {result.repos.slice(0, MAX_REPOS).map((repo, index) => (
        <RepoCard key={repo.id} repo={repo} index={index} />
      ))}
    </div>
  );
}
