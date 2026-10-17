# employablepm-static

Static version of the [EmployablePM](https://employablepm.com) blog, built with
[Astro](https://astro.build). Migrated off the Rails/Fly.io app in October 2026.
Deployed free on GitHub Pages.

## Run locally

```bash
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # production build into dist/
```

## Structure

```
src/
  content/
    posts/           # blog posts as Markdown, one file per post
  layouts/
    BaseLayout.astro # shared page shell (head, header, footer, GA tag)
  pages/
    index.astro      # post list (homepage)
    about.astro      # about page
    posts/[...slug].astro  # per-post page
    rss.xml.js       # RSS feed
  styles/
    global.css       # Acid design system (see identity/design-system.md)
  content.config.ts  # posts collection schema
public/
  images/            # post images, namespaced per post slug
  CNAME              # custom domain (employablepm.com)
```

## Adding a post

Drop a Markdown file in `src/content/posts/` with frontmatter:

```yaml
---
title: "Post title"
date: 2026-10-20
excerpt: "One-line summary."
---
```

Optional fields: `meta_title`, `meta_description` (SEO), `featured`,
`source: linkedin` + `linkedin_url` (for LinkedIn cross-posts),
`draft: true` (excluded from listings, RSS, and routes).

Put images in `public/images/<post-slug>/` and reference them as
`![alt](/images/<post-slug>/file.png)`.

## Deploy

The site deploys from the `gh-pages` branch (built output), not `main`.

1. Make changes on `main`, run `npm run build`.
2. Copy the contents of `dist/` to the `gh-pages` branch root and push.
   GitHub Pages serves it at https://employablepm.com within a minute or two.

(A `.github/workflows/deploy.yml` exists for a future Actions-based deploy;
it can't be added via API — it needs the `workflow` token scope.)

## Design

Visual language is the Acid system: paper `#F2EFE6`, ink `#0E0E0E`,
acid `#C6F24E`. Full spec in the BotAmirContext repo at
`identity/design-system.md`.
