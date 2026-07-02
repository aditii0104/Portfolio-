# Aditi — AI/GenAI Engineer & Python Developer Portfolio

A performance-focused, dark-mode portfolio built with Next.js (App Router),
Tailwind CSS, and Framer Motion. Pre-filled with your real projects
(Data-Swarm, Conversational BI Agent Engine, Contract Clause Extraction
Engine, FashionGen AI Studio) and skill set — just fill in the placeholders
below and ship it.

## Getting started in VS Code

1. **Unzip** this project and open the folder in VS Code.
2. **Install dependencies** (Node 18.17+ required):
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   Then open `.env.local` and set:
   - `GITHUB_USERNAME` — your GitHub handle, powers the live "GitHub Stats" section
   - `GITHUB_TOKEN` *(optional)* — a [personal access token](https://github.com/settings/tokens) with no scopes selected (public-data only), just raises the API rate limit from 60/hr to 5,000/hr
4. **Run the dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Things to personalize before you deploy

Search the project for `your-` and `TODO` — these are the placeholders left
on purpose:

| File | What to update |
|---|---|
| `data/profile.ts` | Surname, email, GitHub/LinkedIn/Hugging Face URLs |
| `data/projects.ts` | Real GitHub repo URLs + live demo / Hugging Face Space links for each project |
| `public/resume/` | Drop in your real resume PDF, matching the filename in `profile.resumeHref` |
| `app/layout.tsx` & `app/sitemap.ts` / `app/robots.ts` | Swap `your-domain.vercel.app` for your real deployed URL once you have one |
| `.env.local` | `GITHUB_USERNAME` (and optionally `GITHUB_TOKEN`) |

## Project structure

```
app/                  Routes (App Router)
  page.tsx            Landing page — assembles all sections
  layout.tsx          Root layout, fonts, SEO metadata, JSON-LD
  api/github/route.ts Server route that calls the GitHub API (cached hourly)
  globals.css         Tailwind base + design tokens (focus states, reduced motion)
  sitemap.ts/robots.ts SEO files

components/           One component per section (Hero, ProjectsGrid, SkillsMatrix,
                      GitHubStats, About, Footer, Navbar) + components/ui/ for
                      small shared pieces

data/                 Your actual content, kept separate from markup
  profile.ts          Name, bio, links, education, experience
  projects.ts         Project cards data
  skills.ts           Skills matrix data

case-studies/         Placeholder folder for deeper project write-ups.
                      See case-studies/README.md for how to wire these up
                      as real routes later without touching the live site
                      until they're ready.

lib/utils.ts          Small shared helpers
types/index.ts        Shared TypeScript types
```

Adding a new project card is just adding one object to the array in
`data/projects.ts` — no markup to touch.

## Design notes

- **Dark by default**, high-contrast type, monospace used deliberately for
  terminal-style labels, tags, and section eyebrows (e.g. `~/aditi/projects`)
  — never for body copy, so it stays readable.
- The hero's faint node-graph backdrop and typed role line are the one
  "signature" animated moment; everything else uses quiet scroll-reveals so
  the motion doesn't compete with the content.
- Fonts are loaded via `next/font/google` (Space Grotesk, Inter, JetBrains
  Mono) so they're self-hosted and zero-layout-shift by default.

## Performance & SEO

- Fonts are optimized automatically via `next/font`.
- The GitHub API route is cached (`revalidate = 3600`) so it doesn't hit
  GitHub on every page load, and fails soft (shows an empty state instead of
  a broken page) if the API is unreachable.
- `metadata`, Open Graph tags, `sitemap.ts`, `robots.ts`, and a `Person`
  JSON-LD block are already wired up in `app/layout.tsx` — update the
  placeholder URL once deployed.
- Reduced-motion is respected globally (`app/globals.css`), and all
  interactive elements have a visible focus ring.

Run a production build locally before deploying to catch anything Lighthouse
would flag:
```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Add the same environment variables from `.env.local` (`GITHUB_USERNAME`,
   `GITHUB_TOKEN`) in the Vercel project's **Settings → Environment
   Variables**.
4. Deploy. Vercel auto-detects Next.js — no build config needed.

## Next steps to build on this

- Wire up real routing for `case-studies/` (see that folder's README).
- Swap the placeholder GitHub/demo links in `data/projects.ts` as each
  project goes live.
- Consider adding a contact form (e.g. via a simple API route + Resend) if
  you'd rather not expose your raw email.
