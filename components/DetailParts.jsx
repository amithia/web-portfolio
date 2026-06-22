/* global React */
/* Shared bits used by detail pages (case-study, focuses, beyond-work-detail). */

const HERO_GLYPHS = {
  heart:  <path d="M20 34 C 20 34, 6 26, 6 16 A 7 7 0 0 1 20 12 A 7 7 0 0 1 34 16 C 34 26, 20 34, 20 34 Z" fill="currentColor" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round"/>,
  globe:  (<g><circle cx="20" cy="20" r="14" fill="currentColor" stroke="#1A1612" strokeWidth="2"/><ellipse cx="20" cy="20" rx="6" ry="14" fill="none" stroke="#1A1612" strokeWidth="1.5"/><line x1="6" y1="20" x2="34" y2="20" stroke="#1A1612" strokeWidth="1.5"/></g>),
  star:   <path d="M20 4 L 24 16 L 36 18 L 27 25 L 30 36 L 20 30 L 10 36 L 13 25 L 4 18 L 16 16 Z" fill="currentColor" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round"/>,
  flower: (<g transform="translate(20 22)">
    <ellipse cx="0" cy="-10" rx="6" ry="9" fill="currentColor" stroke="#1A1612" strokeWidth="2"/>
    <ellipse cx="9" cy="-3"  rx="6" ry="9" fill="currentColor" stroke="#1A1612" strokeWidth="2" transform="rotate(72 9 -3)"/>
    <ellipse cx="6" cy="8"   rx="6" ry="9" fill="currentColor" stroke="#1A1612" strokeWidth="2" transform="rotate(144 6 8)"/>
    <ellipse cx="-6" cy="8"  rx="6" ry="9" fill="currentColor" stroke="#1A1612" strokeWidth="2" transform="rotate(216 -6 8)"/>
    <ellipse cx="-9" cy="-3" rx="6" ry="9" fill="currentColor" stroke="#1A1612" strokeWidth="2" transform="rotate(288 -9 -3)"/>
    <circle r="5" fill="#FCF7E5" stroke="#1A1612" strokeWidth="1.5"/>
    <circle r="2" fill="#1A1612"/>
  </g>),
  flame:  <path d="M20 4 C 24 11, 32 16, 32 24 C 32 30, 26 36, 20 36 C 14 36, 8 30, 8 24 C 8 19, 11 17, 13 16 C 13 21, 15 23, 17 23 C 17 17, 19 11, 20 4 Z" fill="currentColor" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round"/>,
  pin:    (<g>
    <path d="M20 4 C 13 4, 8 9, 8 16 C 8 25, 20 36, 20 36 C 20 36, 32 25, 32 16 C 32 9, 27 4, 20 4 Z" fill="currentColor" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="20" cy="15" r="4.5" fill="#1A1612"/>
  </g>),
  book:   (<g>
    <rect x="6" y="4" width="28" height="32" rx="2" fill="currentColor" stroke="#1A1612" strokeWidth="2"/>
    <line x1="12" y1="12" x2="28" y2="12" stroke="#1A1612" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="18" x2="28" y2="18" stroke="#1A1612" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="24" x2="22" y2="24" stroke="#1A1612" strokeWidth="2" strokeLinecap="round"/>
  </g>),
  compass: (<g>
    <circle cx="20" cy="20" r="14" fill="currentColor" stroke="#1A1612" strokeWidth="2"/>
    <path d="M20 8 L23 20 L20 32 L17 20 Z" fill="#1A1612"/>
    <circle cx="20" cy="20" r="2" fill="#FCF7E5"/>
  </g>),
  fridge: '/assets/motifs/fridge-leftover.svg',
  house:  '/assets/motifs/house-cribd.svg',
};

function Breadcrumb({ trail }) {
  return (
    <nav className="al-breadcrumb">
      {trail.map((t, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="sep" aria-hidden="true">/</span>}
          {t.href ? <a href={t.href}>{t.label}</a> : <span>{t.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

function MetricsRow({ items }) {
  return (
    <div className="al-metrics">
      {items.map((m, i) => (
        <div key={i} className="al-metric">
          <div className="al-metric__num">{m.num}</div>
          <div className="al-metric__lab">{m.label}</div>
        </div>
      ))}
    </div>
  );
}

function NextPrev({ prev, next, hrefFor, prevLabel = 'Previous', nextLabel = 'Next' }) {
  return (
    <div className="al-nextprev">
      <a className="al-nextprev__cell al-nextprev__cell--prev" href={prev ? hrefFor(prev) : '#'} style={prev ? null : { opacity: 0.4, pointerEvents: 'none' }} aria-disabled={!prev || undefined}>
        <div className="al-nextprev__lbl">← {prevLabel}</div>
        <div className="al-nextprev__name" dangerouslySetInnerHTML={{ __html: prev ? (prev.title || prev.name) : '' }} />
      </a>
      <a className="al-nextprev__cell al-nextprev__cell--next" href={next ? hrefFor(next) : '#'} style={next ? null : { opacity: 0.4, pointerEvents: 'none' }} aria-disabled={!next || undefined}>
        <div className="al-nextprev__lbl">{nextLabel} →</div>
        <div className="al-nextprev__name" dangerouslySetInnerHTML={{ __html: next ? (next.title || next.name) : '' }} />
      </a>
    </div>
  );
}

/* Fallback shown when the slug is missing/invalid */
function NotFound({ backHref, backLabel }) {
  return (
    <div className="al-container" style={{ padding: '6rem 0', textAlign: 'center' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-cherry)', marginBottom: 16 }}>Coming soon</p>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 5rem)', letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: 24 }}>
        This one is <em style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontWeight: 400, letterSpacing: 0, color: 'var(--color-cherry)' }}>in the works</em>.
      </h1>
      <p style={{ color: '#3a3530', lineHeight: 1.7, maxWidth: 480, margin: '0 auto 2rem' }}>
        The page for this entry is being put together. Check back soon.
      </p>
      <a href={backHref} className="al-btn al-btn--cherry">
        ← {backLabel}
        <Sparkles />
      </a>
    </div>
  );
}

/* Tiny helper — read slug from URL.
   Priority: ?id= query param (Vercel rewrite) → last path segment (static server) */
function useSlug() {
  const [slug] = React.useState(() => {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get('id');
    if (fromQuery) return fromQuery;
    // Fallback: last path segment, strips .html extension
    const segments = window.location.pathname.replace(/\.html$/, '').split('/').filter(Boolean);
    const last = segments[segments.length - 1] || null;
    // Don't return page names like 'case-study' or 'beyond-work-detail'
    const templateNames = ['work-detail', 'beyond-work-detail', 'practice', 'book', 'templates'];
    return (last && !templateNames.includes(last)) ? last : null;
  });
  return slug;
}

Object.assign(window, { HERO_GLYPHS, Breadcrumb, MetricsRow, NextPrev, NotFound, useSlug });
