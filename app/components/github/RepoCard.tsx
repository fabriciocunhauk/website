import clsx from "clsx";
import { FaCode, FaStar } from "react-icons/fa";
import type { GitHubRepo } from "@/app/lib/is-github-repo";
import { getRepoGridSpan } from "@/app/lib/get-repo-grid-span";

type RepoCardProps = {
  repo: GitHubRepo;
  index: number;
};

const dateFormatter = new Intl.DateTimeFormat("en-GB");

export default function RepoCard({ repo, index }: RepoCardProps) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        getRepoGridSpan(index),
        index === 0 && "min-h-[300px]",
        "group flex flex-col p-6 rounded-xl shadow-lg text-white",
        "bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-700",
        "hover:shadow-xl hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1"
      )}
    >
      <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {repo.name}
      </h3>
      <p className="text-base text-gray-300 mb-4">
        {repo.description || "No description available."}
      </p>
      <div className="flex flex-wrap items-center justify-between text-sm text-gray-400 mt-auto pt-4 border-t border-gray-600">
        {repo.language && (
          <span className="flex items-center space-x-1 pr-2">
            <FaCode className="w-4 h-4 text-gray-400" />
            <span>{repo.language}</span>
          </span>
        )}
        <span className="flex items-center space-x-1 pr-2">
          <FaStar className="w-4 h-4 text-yellow-400" />
          <span>{repo.stargazers_count}</span>
        </span>
        <span className="text-gray-400">
          Updated: {dateFormatter.format(new Date(repo.updated_at))}
        </span>
      </div>
    </a>
  );
}
