/* global React */

function NowReading() {
  const title = 'Our Man in Havana';
  const author = 'Graham Greene';
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(title + ' ' + author)}`;
  return (
    <a href={searchUrl} target="_blank" rel="noopener noreferrer" className="al-now">
      <div className="al-now__cover">
        <svg viewBox="0 0 32 32" fill="none">
          <rect x="6" y="4" width="20" height="24" rx="2" fill="#F8F3E3" stroke="#1A1612" strokeWidth="1.5" />
          <line x1="10" y1="10" x2="22" y2="10" stroke="#1A1612" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="10" y1="14" x2="22" y2="14" stroke="#1A1612" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="10" y1="18" x2="18" y2="18" stroke="#1A1612" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <div className="al-now__lbl">Now Reading</div>
        <div className="al-now__title">Our Man in <em>Havana</em></div>
        <div className="al-now__sub">{author}, 1958</div>
      </div>
      <div className="al-now__pct">
        <div>38%</div>
        <div className="al-now__bar"><div></div></div>
      </div>
    </a>);

}

function Stamp() {
  return (
    <a href="https://www.google.com/maps/search/Recess+Cafe+Canberra" target="_blank" rel="noopener noreferrer" className="al-stamp">
      <svg className="al-stamp__cup" viewBox="0 0 50 52" fill="none">
        {/* Steam */}
        <path d="M15 13 Q14 11 15 9 Q16 7 15 5" stroke="#1A1612" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M22 12 Q21 10 22 8 Q23 6 22 4" stroke="#1A1612" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M29 13 Q28 11 29 9 Q30 7 29 5" stroke="#1A1612" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        {/* Saucer shadow — behind everything */}
        <ellipse cx="21.5" cy="43.5" rx="14" ry="2" fill="#1A1612" opacity="0.18"/>
        {/* Saucer — drawn before cup so cup overlaps it */}
        <ellipse cx="21.5" cy="41" rx="15" ry="3.5" fill="#FCF7E5" stroke="#1A1612" strokeWidth="1.2"/>
        {/* Saucer inner well ring */}
        <ellipse cx="21.5" cy="41" rx="7.5" ry="1.8" fill="none" stroke="#1A1612" strokeWidth="0.7" opacity="0.25"/>
        {/* Handle — proper D-ring, transparent hole via evenodd, drawn before cup */}
        <path
          d="M32 23 Q47 23 47 30.5 Q47 38 32 38 Z M32 27 Q42 27 42 30.5 Q42 34 32 34 Z"
          fill="#E54B3C" fillRule="evenodd"
          stroke="#1A1612" strokeWidth="1.5" strokeLinejoin="round"
        />
        {/* Cup body — bottom at y≈40.5 so it overlaps into the saucer */}
        <path d="M8 15 L10 38 Q10.5 40.5 13 40.5 L30 40.5 Q32.5 40.5 33 38 L35 15 Z" fill="#E54B3C" stroke="#1A1612" strokeWidth="1.5" strokeLinejoin="round"/>
        {/* Cup rim */}
        <ellipse cx="21.5" cy="15" rx="13.5" ry="3" fill="#1A1612"/>
        {/* Coffee surface */}
        <ellipse cx="21.5" cy="15" rx="12" ry="2.5" fill="#2C1810"/>
        {/* Milk swirl — subtle latte art */}
        <path d="M17.5 15 Q19.5 13.2 21.5 15 Q19.5 16.8 17.5 15 Z" fill="rgba(252,247,229,0.22)"/>
      </svg>
      <div>
        <div className="al-stamp__lbl">Favourite cafe · May 2026</div>
        <div className="al-stamp__val">Recess <em>Cafe</em></div>
        <div className="al-stamp__coords">Canberra, ACT · flat white</div>
      </div>
    </a>);

}

const STAT_STICKER_SRCS = [
  '/assets/motifs/sticker-hourglass.svg',
  '/assets/motifs/sticker-rocket.svg',
  '/assets/motifs/sticker-globe-pin.svg',
  '/assets/motifs/sticker-coffee.svg',
];

function Stats({ items }) {
  return (
    <div className="al-stats">
      {items.map((s, i) =>
        <div key={i} className="al-stat">
          <div className="al-stat__num">{s.num}</div>
          <div className="al-stat__lab">{s.label}</div>
          <div className="al-stat__sticker"><img src={STAT_STICKER_SRCS[i]} alt="" /></div>
        </div>
      )}
    </div>);
}

function SectionHeader({ title, index }) {
  return (
    <div className="al-section-header">
      <h2 className="al-section-header__title" dangerouslySetInnerHTML={{ __html: title }} />
      <span className="al-section-header__num">{index}</span>
    </div>);

}

function SpotifyWidget() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetch_ = () =>
      fetch('/api/now-playing')
        .then(r => r.json())
        .then(setData)
        .catch(() => setData({ isPlaying: false, title: '—', artist: '—', albumArt: null, songUrl: '#' }));
    fetch_();
    const id = setInterval(fetch_, 30000);
    return () => clearInterval(id);
  }, []);

  if (!data) return null;

  return (
    <a href={data.songUrl || '#'} target="_blank" rel="noopener noreferrer" className="al-spotify">
      <svg className="al-spotify__record" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="19" fill="#E54B3C" stroke="#1A1612" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="15" fill="none" stroke="#1A1612" strokeWidth="1" strokeOpacity="0.25"/>
        <circle cx="20" cy="20" r="12" fill="none" stroke="#1A1612" strokeWidth="1" strokeOpacity="0.2"/>
        <circle cx="20" cy="20" r="9"  fill="none" stroke="#1A1612" strokeWidth="1" strokeOpacity="0.15"/>
        <circle cx="20" cy="20" r="7"  fill="#FCF7E5" stroke="#1A1612" strokeWidth="1.2"/>
        <circle cx="20" cy="16" r="1.5" fill="#EE7BA8"/>
        <circle cx="20" cy="20" r="2"  fill="#1A1612"/>
        <circle cx="20" cy="20" r="0.8" fill="#FCF7E5"/>
      </svg>
      <div className="al-spotify__info">
        <div className="al-spotify__status">
          {data.isPlaying ? (
            <><span className="al-spotify__dot"></span>Now playing</>
          ) : (
            <>Last played</>
          )}
        </div>
        <div className="al-spotify__title">{data.title}</div>
        <div className="al-spotify__artist">{data.artist}</div>
      </div>
      {data.albumArt && (
        <img src={data.albumArt} alt={data.album} className="al-spotify__art" />
      )}
      <svg className="al-spotify__logo" viewBox="0 0 24 24" fill="#1DB954"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
    </a>
  );
}

Object.assign(window, { NowReading, Stamp, Stats, SectionHeader, SpotifyWidget });