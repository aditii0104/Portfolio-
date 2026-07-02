import { NextResponse } from "next/server";
import type { GithubRepo, GithubStatsResponse } from "@/types";

// Revalidate this route's data every hour so the page stays fast
// without hitting the GitHub API on every single request.
export const revalidate = 3600;

export async function GET() {
  const username = process.env.GITHUB_USERNAME || "your-github-username";
  const token = process.env.GITHUB_TOKEN;

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate },
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`,
        { headers, next: { revalidate } }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error(`GitHub API responded with ${userRes.status}/${reposRes.status}`);
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    const topRepos: GithubRepo[] = (Array.isArray(repos) ? repos : [])
      .filter((r: GithubRepo) => !r.name.includes(".github.io"))
      .slice(0, 5)
      .map((r: GithubRepo) => ({
        name: r.name,
        description: r.description,
        html_url: r.html_url,
        language: r.language,
        stargazers_count: r.stargazers_count,
        pushed_at: r.pushed_at,
      }));

    const payload: GithubStatsResponse = {
      username,
      publicRepos: user.public_repos ?? 0,
      followers: user.followers ?? 0,
      topRepos,
    };

    return NextResponse.json(payload);
  } catch (err) {
    // Fail soft: the UI shows a friendly empty state instead of breaking.
    const payload: GithubStatsResponse = {
      username,
      publicRepos: 0,
      followers: 0,
      topRepos: [],
      error: "Couldn't reach the GitHub API right now.",
    };
    return NextResponse.json(payload, { status: 200 });
  }
}
