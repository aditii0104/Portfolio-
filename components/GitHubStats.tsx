"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Star, Users, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { formatRelativeDate } from "@/lib/utils";
import type { GithubStatsResponse } from "@/types";

export default function GitHubStats() {
  const [data, setData] = useState<GithubStatsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch("/api/github")
      .then((res) => res.json())
      .then((json: GithubStatsResponse) => {
        if (active) setData(json);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="github" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="~/aditi/github --live"
          title="Live from GitHub"
          description="Pulled straight from the GitHub API at request time — proof the commits are still coming."
        />

        {loading && (
          <div className="font-mono text-sm text-ink-500">
            fetching latest activity…
          </div>
        )}

        {!loading && data && data.topRepos.length === 0 && (
          <div className="rounded-xl border border-line bg-base-900/60 p-6 font-mono text-sm text-ink-500">
            {data.error ??
              "No public repos found yet — set GITHUB_USERNAME in .env.local to point this at your account."}
          </div>
        )}

        {!loading && data && data.topRepos.length > 0 && (
          <>
            <div className="flex flex-wrap gap-6 mb-8 font-mono text-sm text-ink-300">
              <span className="flex items-center gap-1.5">
                <GitBranch size={14} className="text-teal" />
                {data.publicRepos} public repos
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={14} className="text-teal" />
                {data.followers} followers
              </span>
              <a
                href={`https://github.com/${data.username}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-ink-500 hover:text-teal transition-colors"
              >
                @{data.username}
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {data.topRepos.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                  className="group rounded-lg border border-line bg-base-900/60 p-4 hover:border-teal/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-sm text-ink-50 group-hover:text-teal transition-colors truncate">
                      {repo.name}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-xs text-ink-500 shrink-0">
                      <Star size={12} />
                      {repo.stargazers_count}
                    </span>
                  </div>
                  {repo.description && (
                    <p className="mt-2 text-xs text-ink-500 line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                  <div className="mt-3 flex items-center gap-3 font-mono text-[11px] text-ink-700">
                    {repo.language && <span>{repo.language}</span>}
                    <span>pushed {formatRelativeDate(repo.pushed_at)}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
