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

Verified publishing setup (2026-10-24): GitHub Pages uses **Deploy from a
branch**, branch **`gh-pages`**, folder **`/` (root)**. It serves
https://employablepm.com. `main` holds Astro source; pushing source to `main`
does not publish the website. No main-to-gh-pages deployment workflow was
present when checked. Do not assume an automatic bridge exists.

### Preserve live content before building

`main` and the live `gh-pages` output are not yet in sync. As of 2026-10-24,
`gh-pages` includes the October 19 metric post, October 21 Trello post, and
Talks/navigation updates missing from `main`. A full replacement with `dist/`
built from that stale source would remove live content. This drift has not
been repaired.

1. Fetch current `main` and `gh-pages`. Check the current Pages settings and
   workflows before choosing a publishing route.
2. Compare the source/build with current `gh-pages`, including all live posts,
   homepage entries, RSS items, navigation and assets. Never overwrite or
   delete live-only content with a stale build.
3. Until source parity is restored, base deployment changes on current
   `gh-pages` and merge only the intended new or changed output, preserving
   existing files and homepage/RSS entries. Inspect the complete deployment
   diff before pushing. Alternatively, reconcile the missing source first as
   a separately scoped change, then build and compare again.
4. Commit approved source changes on `main`; build with `npm run build`.
   Commit approved built-output changes to the `gh-pages` root and push that
   branch. Keep `CNAME` and existing shared assets intact.
5. Wait for the Pages deployment to succeed, then open the live page and
   homepage. Check text, images, canonical URL, source links, RSS and older
   content. A source push or successful build alone is not completion.

For LinkedIn mirrors, use the actual published text and LinkedIn URL, with
`source: linkedin` and `linkedin_url` in frontmatter. Keep the image after the
text and the existing "Originally posted on LinkedIn" attribution.

## Design

Visual language is the Acid system: paper `#F2EFE6`, ink `#0E0E0E`,
acid `#C6F24E`. Full spec in the BotAmirContext repo at
`identity/design-system.md`.

Every page, including each language version, must include the dark/light
toggle. See "Website pages" in that file.
