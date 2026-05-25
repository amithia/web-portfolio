/* global React */
function FilterBar({ filters, active, onChange }) {
  return (
    <div className="al-filter-bar">
      {filters.map(f => (
        <button
          key={f.id}
          className={`al-pill${active === f.id ? ' active' : ''}`}
          onClick={() => onChange(f.id)}
        >
          <span className="al-pill__dot" style={{ background: f.dot }}></span>
          {f.label}
        </button>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   STICKER GLYPHS — chunky filled, 2px ink stroke, palette fills.
   Matches the Brand — Iconography card 1:1.
   Use viewBox 0 0 40 40. Each is a self-contained <g>.
   ───────────────────────────────────────────────────────── */
const STICKERS = {
  flower: (
    <g>
      <g transform="translate(20 22)">
        <ellipse cx="0" cy="-10" rx="6" ry="9" fill="#EE7BA8" stroke="#1A1612" strokeWidth="2"/>
        <ellipse cx="9" cy="-3"  rx="6" ry="9" fill="#EE7BA8" stroke="#1A1612" strokeWidth="2" transform="rotate(72 9 -3)"/>
        <ellipse cx="6" cy="8"   rx="6" ry="9" fill="#EE7BA8" stroke="#1A1612" strokeWidth="2" transform="rotate(144 6 8)"/>
        <ellipse cx="-6" cy="8"  rx="6" ry="9" fill="#EE7BA8" stroke="#1A1612" strokeWidth="2" transform="rotate(216 -6 8)"/>
        <ellipse cx="-9" cy="-3" rx="6" ry="9" fill="#EE7BA8" stroke="#1A1612" strokeWidth="2" transform="rotate(288 -9 -3)"/>
        <circle r="5" fill="#FCF7E5" stroke="#1A1612" strokeWidth="1.5"/>
        <circle r="2" fill="#E54B3C"/>
      </g>
    </g>
  ),
  star: (
    <path d="M20 4 L 24 16 L 36 18 L 27 25 L 30 36 L 20 30 L 10 36 L 13 25 L 4 18 L 16 16 Z"
          fill="#E54B3C" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round"/>
  ),
  globe: (
    <g>
      <circle cx="20" cy="20" r="14" fill="#B9A6E0" stroke="#1A1612" strokeWidth="2"/>
      <ellipse cx="20" cy="20" rx="6" ry="14" fill="none" stroke="#1A1612" strokeWidth="1.5"/>
      <line x1="6" y1="20" x2="34" y2="20" stroke="#1A1612" strokeWidth="1.5"/>
      <circle cx="27" cy="14" r="2" fill="#E54B3C"/>
    </g>
  ),
  heart: (
    <path d="M20 34 C 20 34, 6 26, 6 16 A 7 7 0 0 1 20 12 A 7 7 0 0 1 34 16 C 34 26, 20 34, 20 34 Z"
          fill="#E54B3C" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round"/>
  ),
  letter: (
    <g>
      <rect x="6" y="11" width="28" height="22" rx="3" fill="#FCF7E5" stroke="#1A1612" strokeWidth="2"/>
      <path d="M6 14 L20 24 L34 14" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      <circle cx="32" cy="11" r="4" fill="#EE7BA8" stroke="#1A1612" strokeWidth="1.5"/>
    </g>
  ),
  flame: (
    <g>
      <path d="M20 4 C 24 11, 32 16, 32 24 C 32 30, 26 36, 20 36 C 14 36, 8 30, 8 24 C 8 19, 11 17, 13 16 C 13 21, 15 23, 17 23 C 17 17, 19 11, 20 4 Z"
            fill="#E54B3C" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M20 18 C 23 22, 26 25, 26 29 C 26 32, 23 34, 20 34 C 17 34, 14 32, 14 29 C 14 25, 17 22, 20 18 Z"
            fill="#FCF7E5"/>
    </g>
  ),
  pin: (
    <g>
      <path d="M20 4 C 13 4, 8 9, 8 16 C 8 25, 20 36, 20 36 C 20 36, 32 25, 32 16 C 32 9, 27 4, 20 4 Z"
            fill="#FCF7E5" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="20" cy="15" r="4.5" fill="#1A1612"/>
      <circle cx="20" cy="15" r="1.6" fill="#EE7BA8"/>
    </g>
  ),
  smile: (
    <g>
      <circle cx="20" cy="20" r="14" fill="#EE7BA8" stroke="#1A1612" strokeWidth="2"/>
      <circle cx="15" cy="17" r="1.5" fill="#1A1612"/>
      <circle cx="25" cy="17" r="1.5" fill="#1A1612"/>
      <path d="M13 24 Q 20 30 27 24" stroke="#1A1612" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </g>
  ),
  mountain: (
    <g>
      <path d="M6 32 L 20 8 L 34 32 Z" fill="#6B7A3F" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M14 19 L 20 8 L 26 19 L 23 22 L 20 18 L 17 22 Z" fill="#FCF7E5" stroke="#1A1612" strokeWidth="1.5" strokeLinejoin="round"/>
    </g>
  ),
  note: (
    <g>
      <rect x="6" y="11" width="26" height="20" rx="3" fill="#FCF7E5" stroke="#1A1612" strokeWidth="2"/>
      <path d="M11 17 L27 17 M11 22 L22 22" stroke="#1A1612" strokeWidth="2" strokeLinecap="round"/>
      <rect x="24" y="5" width="9" height="11" rx="2" fill="#E54B3C" stroke="#1A1612" strokeWidth="1.5" transform="rotate(12 28.5 10.5)"/>
    </g>
  ),
  time: (
    <g>
      <circle cx="20" cy="20" r="14" fill="#FCF7E5" stroke="#1A1612" strokeWidth="2"/>
      <line x1="20" y1="20" x2="20" y2="10" stroke="#1A1612" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="20" x2="27" y2="24" stroke="#E54B3C" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="2" fill="#1A1612"/>
    </g>
  ),
  home: (
    <g>
      <path d="M8 34 V 18 L 5 18 L 20 5 L 35 18 L 32 18 V 34 Z" fill="#B9A6E0" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
      <rect x="17" y="22" width="6" height="12" fill="#1A1612"/>
      <circle cx="22" cy="28" r="0.8" fill="#EE7BA8"/>
    </g>
  ),
  bell: (
    <g>
      <path d="M20 4 C 13 4, 9 9, 9 16 V 26 L 6 30 H 34 L 31 26 V 16 C 31 9, 27 4, 20 4 Z"
            fill="#B9A6E0" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M16 32 C 16 34, 18 36, 20 36 C 22 36, 24 34, 24 32" stroke="#1A1612" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </g>
  ),
  check: (
    <g>
      <circle cx="20" cy="20" r="14" fill="#6B7A3F" stroke="#1A1612" strokeWidth="2"/>
      <path d="M13 21 L18 26 L28 14" stroke="#FCF7E5" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  ),
};

/* Per-card sticker set — themed to the project */
const STICKER_SETS = {
  /* Ion Studio — AI startup */
  ion:      ['flame', 'star', 'globe'],
  /* WheelToDo — accessibility app */
  wheel:    ['heart', 'check', 'smile'],
  /* Cribd. — student accommodation */
  cribd:    ['home', 'pin', 'letter'],
  /* Leftover App — food surplus */
  leftover: ['flower', 'note', 'smile'],
  /* Explore Your Campus — ANU web */
  campus:   ['pin', 'mountain', 'star'],
  /* A/B Testing Calculator — data tool */
  abtest:   ['note', 'check', 'globe'],
};

/* Original mini glyphs for the small corner badge — re-used from before */
const GLYPHS = {
  star:   <path d="M14 2 L17 11 L26 12 L19 18 L21 27 L14 22 L7 27 L9 18 L2 12 L11 11 Z" fill="currentColor"/>,
  heart:  <path d="M14 24 C 14 24, 4 18, 4 11 A 5 5 0 0 1 14 8 A 5 5 0 0 1 24 11 C 24 18, 14 24, 14 24 Z" fill="currentColor"/>,
  globe:  (<><circle cx="14" cy="14" r="10" fill="currentColor"/><ellipse cx="14" cy="14" rx="4" ry="10" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1"/><line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1"/></>),
  flower: (<g transform="translate(14 14)"><ellipse cx="0" cy="-7" rx="4" ry="6" fill="currentColor"/><ellipse cx="6.7" cy="-2.2" rx="4" ry="6" fill="currentColor" transform="rotate(72 6.7 -2.2)"/><ellipse cx="4.1" cy="5.7" rx="4" ry="6" fill="currentColor" transform="rotate(144 4.1 5.7)"/><ellipse cx="-4.1" cy="5.7" rx="4" ry="6" fill="currentColor" transform="rotate(216 -4.1 5.7)"/><ellipse cx="-6.7" cy="-2.2" rx="4" ry="6" fill="currentColor" transform="rotate(288 -6.7 -2.2)"/></g>),
  flame:  <path d="M14 3 C 17 8, 22 11, 22 17 C 22 22, 18 26, 14 26 C 10 26, 6 22, 6 17 C 6 13, 9 11, 11 11 C 11 14, 12 15, 13 15 C 13 11, 13 7, 14 3 Z" fill="currentColor"/>,
  pin:    <path d="M14 3 C 10 3, 7 6, 7 10 C 7 16, 14 25, 14 25 C 14 25, 21 16, 21 10 C 21 6, 18 3, 14 3 Z" fill="currentColor"/>,
  home:   <path d="M2 15 L14 3 L26 15 L23 15 L23 26 L17 26 L17 19 L11 19 L11 26 L5 26 L5 15 Z" fill="currentColor"/>,
};

function ProjectCard({ project, featured }) {
  const { tone = 'cherry', cat, title, teaser, label, meta, glyph, stickers, slug } = project;
  const href = `/work/${slug}`;
  const g = GLYPHS[glyph] || GLYPHS.star;
  const set = (stickers && STICKER_SETS[stickers]) || [glyph, glyph, glyph];

  /* Per-card sticker layouts — each project has its own pair of
     positions on the edges of the color panel. Slight bleed off the
     edge, varied sizes/angles, no corner-locked symmetry. */
  const LAYOUTS = {
    /* Ion Studio — featured. Big flame high-left, star low-right */
    ion:      [
      { top: '-8%',    left: '10%',   size: 128, rotate: -14 },
      { bottom: '10%', right: '-7%',  size: 88,  rotate: 12  },
    ],
    /* WheelToDo — high-right + mid-left edge */
    wheel:    [
      { top: '-10%',   right: '20%',  size: 96,  rotate: 10  },
      { top: '42%',    left: '-8%',   size: 64,  rotate: -18 },
    ],
    /* Cribd. — mid-right edge + low-left */
    cribd:    [
      { top: '10%',    right: '-10%', size: 88,  rotate: -12 },
      { bottom: '-8%', left: '28%',   size: 62,  rotate: 16  },
    ],
    /* Leftover App — top-mid + low-right */
    leftover: [
      { top: '-8%',    left: '32%',   size: 90,  rotate: 8   },
      { bottom: '16%', right: '-7%',  size: 62,  rotate: -14 },
    ],
    /* Explore Campus — high-left + low-mid */
    campus:   [
      { top: '10%',    left: '-9%',   size: 86,  rotate: -10 },
      { bottom: '-9%', right: '24%',  size: 60,  rotate: 18  },
    ],
    /* A/B Testing — top-right + mid-left */
    abtest:   [
      { top: '-9%',    right: '16%',  size: 84,  rotate: -14 },
      { bottom: '22%', left: '-8%',   size: 62,  rotate: 12  },
    ],
  };

  const fallback = [
    { top: '-10%', right: '20%',  size: 90, rotate: -14 },
    { bottom: '-8%', left: '20%', size: 64, rotate: 12  },
  ];
  const layout = LAYOUTS[stickers] || fallback;

  return (
    <a href={href} className={`al-card${featured ? ' al-card--featured' : ''}`}>
      <div className={`al-card__img al-card__img--${tone}`}>
        <svg className="al-card__img-glyph" viewBox="0 0 28 28">{g}</svg>
        {label}
      </div>
      <div className="al-card__stickers" aria-hidden="true">
        {layout.map((p, i) => {
          const stickerKey = set[i] || set[0];
          const sticker = STICKERS[stickerKey] || STICKERS.star;
          return (
            <div
              key={i}
              className="al-card__sticker"
              style={{
                top: p.top, right: p.right, bottom: p.bottom, left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                '--r': `${p.rotate}deg`,
              }}
            >
              <svg viewBox="0 0 40 40" style={{ width: '100%', height: '100%', display: 'block' }}>{sticker}</svg>
            </div>
          );
        })}
      </div>
      <div className="al-card__body">
        <span className="al-card__cat">{cat}</span>
        <h3 className="al-card__title" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="al-card__teaser">{teaser}</p>
      </div>
      <div className="al-card__foot">
        <span>{meta}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="al-card__arrow">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </div>
    </a>
  );
}

Object.assign(window, { FilterBar, ProjectCard });

