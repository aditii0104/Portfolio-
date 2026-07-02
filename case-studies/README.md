# Case Studies

This folder is scaffolding for deeper, individual write-ups of each
project — the kind of page a recruiter clicks into from a project
card when they want the full story (architecture, decisions, tradeoffs,
metrics).

## Suggested approach

1. Duplicate `_template/` into a new folder named after your project's
   slug, e.g. `data-swarm/`.
2. Write the case study as `page.mdx` or `page.tsx` there.
3. Move (or symlink) it under `app/case-studies/[slug]/page.tsx` once
   you're ready to wire up routing — that gives you a URL like
   `/case-studies/data-swarm` automatically with the Next.js App Router.
4. Link to it from the matching `ProjectCard` by adding a `caseStudyHref`
   field to that project in `data/projects.ts`.

Keeping the source content here first (outside `app/`) lets you draft
case studies without affecting the live site until they're ready to
publish.
