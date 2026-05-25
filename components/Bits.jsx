/* global React */

function NowReading() {
  return (
    <div className="al-now">
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
        <div className="al-now__sub">Graham Greene, 1958</div>
      </div>
      <div className="al-now__pct">
        <div>38%</div>
        <div className="al-now__bar"><div></div></div>
      </div>
    </div>);

}

function Stamp() {
  return (
    <div className="al-stamp">
      <div className="al-stamp__lbl">Currently · May 2026</div>
      <div className="al-stamp__val">Canberra, <em>Australia</em></div>
      <div className="al-stamp__coords">35.2802° S · 149.1310° E</div>
    </div>);

}

function Stats({ items }) {
  return (
    <div className="al-stats">
      {items.map((s, i) =>
      <div key={i} className="al-stat">
          <div className="al-stat__num">{s.num}</div>
          <div className="al-stat__lab">{s.label}</div>
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
        .catch(() => {});
    fetch_();
    const id = setInterval(fetch_, 30000);
    return () => clearInterval(id);
  }, []);

  if (!data) return null;

  return (
    <div className="al-spotify__wrap">
      <div className="al-spotify__heading">
        <svg className="al-spotify__record" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="#1A1612" stroke="#1A1612" strokeWidth="1.5"/>
          <circle cx="20" cy="20" r="13" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4"/>
          <circle cx="20" cy="20" r="8"  fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3"/>
          <circle cx="20" cy="20" r="3"  fill="#FCF7E5"/>
          <circle cx="20" cy="20" r="1.2" fill="#1DB954"/>
        </svg>
        <span>Currently listening to</span>
      </div>
    <a href={data.songUrl || '#'} target="_blank" rel="noopener noreferrer" className="al-spotify">
      {data.albumArt && (
        <img src={data.albumArt} alt={data.album} className="al-spotify__art" />
      )}
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
      <svg className="al-spotify__logo" viewBox="0 0 24 24" fill="#1DB954"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
    </a>
    </div>
  );
}

Object.assign(window, { NowReading, Stamp, Stats, SectionHeader, SpotifyWidget });