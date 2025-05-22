"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Card from "./Card";
import { FaCode, FaStar } from "react-icons/fa";

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

const GitHubActivity: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const username: string = "fabriciocunhauk";

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`
        );
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        const data: GitHubRepo[] = await response.json();
        const originalRepos = data.filter((repo) => !repo.fork);
        setRepos(originalRepos);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching GitHub repositories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, [username]);

  const cardContainerClasses = {
    card: "relative grid grid-rows-1 bg-gray-800/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl  hover:translate-none",
  };

  const getGridSpan = (index: number) => {
    if (index === 0) return "col-span-full md:col-span-2 row-span-1";
    if (index === 1) return "col-span-full md:col-span-1";
    if (index === 2) return "col-span-full md:col-span-2";
    if (index === 3) return "col-span-full md:col-span-1";

    return "col-span-full md:col-span-1";
  };

  if (loading) {
    return (
      <section id="github-activity" className="text-white py-24">
        <Container>
          <Card classes={cardContainerClasses}>
            <div className="space-y-8 z-20 text-center">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                My Latest <span className="text-primary">GitHub</span> Activity
              </h2>
              <p className="text-lg text-gray-200">
                Crafting the perfect grid of code...
              </p>
            </div>
          </Card>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github-activity" className="text-white py-24">
        <Container>
          <Card classes={cardContainerClasses}>
            <div className="space-y-8 z-20 text-center">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                My Latest <span className="text-primary">GitHub</span> Activity
              </h2>
              <p className="text-lg text-red-400">
                Failed to load GitHub repositories: {error}
              </p>
            </div>
          </Card>
        </Container>
      </section>
    );
  }

  return (
    <section id="github-activity" className="text-white py-24">
      <Container>
        <Card classes={cardContainerClasses}>
          <div className="space-y-8 z-20">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-center mb-16">
              My Latest <span className="text-primary">GitHub</span> Activity
            </h2>

            {repos.length === 0 ? (
              <p className="text-lg text-gray-200 text-center">
                No public repositories found.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {repos.slice(0, 7).map((repo, index) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      ${getGridSpan(index)}
                      group flex flex-col p-6 rounded-xl shadow-lg
                      bg-gradient-to-br from-gray-700 to-gray-900 
                      border border-gray-700
                      hover:shadow-xl hover:border-blue-600 transition-all duration-300
                      transform hover:-translate-y-1
                      text-white 
                    `}
                    style={{ minHeight: index === 0 ? "300px" : "auto" }}
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
                        Updated:{" "}
                        {new Date(repo.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default GitHubActivity;
