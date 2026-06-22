# amithi.work

Personal portfolio site for Amithi Liyanagamage — developer, designer, and all-round builder. Live at [amithi.work](https://amithi.work).

---

## Stack

| Layer | Choice |
|---|---|
| Markup | Plain HTML |
| UI | React 18 (CDN) + Babel (CDN) |
| Styles | Vanilla CSS with custom properties |
| Deploy | Vercel (no build step) |
| Fonts | Space Grotesk · Bespoke Serif · Inter · JetBrains Mono |

No bundler. No framework. No node_modules. Just files.

---

## Project structure

```
/
├── home.html                   ← Homepage (hero, projects, about snippet)
├── about.html                  ← About page
├── work.html                   ← Full work listing
├── beyond-work.html            ← Beyond-work listing
├── milestones.html             ← Timeline / milestones
├── contact.html                ← Contact page
│
├── templates/
│   ├── work-detail.html        ← Project detail (data-driven, shared template)
│   └── beyond-work-detail.html ← Beyond-work detail template
│
├── data.js                     ← All content (projects, extras, etc.)
│
├── components/
│   ├── Nav.jsx                 ← Navigation + hamburger mobile menu
│   ├── Hero.jsx                ← Homepage hero with photo card stack
│   ├── Project.jsx             ← Project cards + filter bar
│   ├── DetailParts.jsx         ← Breadcrumb, metrics, next/prev nav
│   ├── Bits.jsx                ← Shared UI: buttons, badges, section headers
│   ├── AboutFooter.jsx         ← About snippet + footer
│   └── Extras.jsx              ← Spotify widget, reading widget, misc
│
├── css/
│   ├── colors_and_type.css     ← Design tokens (colours, type scale, spacing)
│   ├── styles.css              ← Main stylesheet
│   └── detail.css              ← Detail page styles
│
├── api/
│   └── now-playing.js          ← Vercel serverless fn — Spotify now playing
│
├── assets/
│   ├── photos/                 ← Profile + project images
│   └── motifs/                 ← Decorative SVG stickers and glyphs
│
├── fonts/                      ← Bespoke Serif (self-hosted woff2)
├── favicon.svg
└── vercel.json                 ← Routing, redirects, clean URLs
```

---

## Design tokens

Defined in `css/colors_and_type.css` and used as CSS custom properties throughout.

**Colours**

| Name | Hex |
|---|---|
| Ink | `#1A1612` |
| Parchment | `#F0E9D6` |
| Chalk | `#FCF7E5` |
| Cherry | `#E54B3C` |
| Bubblegum | `#EE7BA8` |
| Lilac | `#B9A6E0` |
| Moss | `#6B7A3F` |

**Type** — fluid scale via `clamp()`, from `--text-xs` through `--text-hero`.

**Spacing** — `--space-1` through `--space-32` (0.25rem steps).

---

## Adding content

All content lives in `data.js` — no HTML files need to be touched for new entries.

**New project**
```js
// window.PROJECTS in data.js
{
  id: N,
  slug: 'project-slug',          // used in URL: /work/project-slug
  category: 'fullstack',         // fullstack | ux | mobile | data | ai | consulting
  title: 'Project <em>Title</em>',
  teaser: 'One-line description.',
  tone: 'cherry',                // cherry | lilac | moss | bubblegum | ink
  year: 2025,
  featured: false,               // true = spans 2 columns in the grid
  sections: [ ... ],             // detail page content blocks
}
```

**New beyond-work entry**
```js
// window.EXTRAS in data.js
{
  id: N,
  slug: 'entry-slug',
  title: 'Title',
  meta: 'Type · Year',
  tone: 'bubblegum',
  desc: 'Short description.',
}
```

---

## Running locally

No install needed — just serve the directory:

```bash
npx serve .
# or
python3 -m http.server 3000
```

Then open `http://localhost:3000/home`.

---

## Deployment

Deployed on Vercel. Pushing to `dev` triggers a preview deployment; merging to `main` goes live.

```bash
# Feature work
git checkout dev
git push origin dev        # → preview deploy

# Ship to production
git checkout main
git merge dev
git push origin main       # → live at amithi.work
```

Routing is handled by `vercel.json` — clean URLs (no `.html` extensions), `/` rewrites to `/home`, and `/work/:slug` / `/beyond-work/:slug` resolve to their shared detail templates.
