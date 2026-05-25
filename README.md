# Amithi Liyanagamage — Portfolio

Personal portfolio site. Live at [amithi-work.vercel.app](https://amithi-work.vercel.app).

## Stack

Plain HTML + React 18 (CDN) + Babel (CDN). No build step, no bundler.

All content is driven by `data.js` — adding a new project, cert, or creative piece only requires adding an object to the relevant array. No HTML files need to be created.

## Structure

```
/
├── data.js                   ← All content (projects, learning, creative, reading)
│
├── index.html                ← Home
├── about.html                ← About
├── work.html                 ← Work listing
├── beyond-work.html          ← Learning + creative listing
├── timeline.html             ← Timeline
├── contact.html              ← Contact
├── sitemap.html              ← Full site index
│
├── case-study.html           ← Project detail template (all projects)
├── learning-detail.html      ← Learning detail template (all certs)
├── creative-detail.html      ← Creative detail template (all creative work)
│
├── projects.html             ← Full project grid
├── courses.html              ← Full courses listing
├── book.html                 ← Reading list
│
├── components/
│   ├── Nav.jsx               ← Navigation + mobile menu
│   ├── Hero.jsx              ← Homepage hero
│   ├── Project.jsx           ← Project cards
│   ├── DetailParts.jsx       ← Breadcrumb, metrics row, next/prev
│   ├── Bits.jsx              ← Buttons, badges, section headers
│   ├── AboutFooter.jsx       ← About section + footer
│   └── Extras.jsx            ← Misc UI pieces
│
├── styles.css                ← Main stylesheet
├── detail.css                ← Detail page styles
├── colors_and_type.css       ← Design tokens (colours, type, spacing)
│
├── assets/
│   ├── logo-al.svg           ← Monogram
│   ├── logo-full.svg         ← Full name logo
│   └── motifs/               ← Decorative SVG glyphs
│
└── fonts/                    ← Bespoke Serif (self-hosted)
```

## Design tokens

| Token | Value |
|-------|-------|
| Ink | `#1A1612` |
| Parchment | `#F0E9D6` |
| Chalk | `#FCF7E5` |
| Cherry | `#E54B3C` |
| Bubblegum | `#EE7BA8` |
| Lilac | `#B9A6E0` |
| Moss | `#6B7A3F` |

**Fonts:** Space Grotesk (display) · Bespoke Serif (accent italic) · Inter (body) · JetBrains Mono (mono)

## Adding content

**New project** — add to `window.PROJECTS` in `data.js`:
```js
{
  id: N, slug: 'your-slug',
  cat: 'Category · Type',
  title: 'Project <em>Title</em>',
  teaser: 'One-line description.',
  tone: 'cherry',         // cherry | lilac | moss | bubblegum
  year: 2025,
  sections: [ ... ],      // optional detail content
}
```

**New pipeline project** — add to `window.UPCOMING` in `data.js` (same shape, no `year`).

**New cert** — add to `window.LEARNING` in `data.js`:
```js
{ slug: 'your-slug', provider: 'Google', title: 'Cert Name', status: 'active', progress: 40, desc: '...' }
```

**New creative work** — add to `window.CREATIVE` in `data.js`:
```js
{ id: N, slug: 'your-slug', title: 'Title', meta: 'Medium · Year', tone: 'bubblegum', desc: '...' }
```

## Dev workflow

```bash
# Work on dev
git checkout dev
# make changes
git add <files>
git commit -m "description"
git push origin dev        # → preview at dev-amithi-work.vercel.app

# Ship to production
git checkout main
git merge dev
git push origin main       # → live at amithi-work.vercel.app
```
