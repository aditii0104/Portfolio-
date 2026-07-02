export type ProjectCategory = "AI/GenAI" | "Full-Stack" | "Data";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  problem: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  demoLabel?: string;
  featured?: boolean;
}

export interface SkillGroup {
  label: string;
  eyebrow: string;
  skills: string[];
}

export interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
}

export interface GithubStatsResponse {
  username: string;
  publicRepos: number;
  followers: number;
  topRepos: GithubRepo[];
  error?: string;
}
