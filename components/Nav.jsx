/* global React */
const { useState, useEffect } = React;

function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    ['/about',        '01', 'About'],
    ['/work',         '02', 'Work'],
    ['/beyond-work',  '03', 'Beyond Work'],
    ['/timeline',     '04', 'Timeline'],
    // ['/contact',      '05', 'Contact'],
  ];

  const current = window.location.pathname.replace(/\.html$/, '');

  return (
    <>
      <div className="coord-strip">
        <div className="pin"><span className="dot"></span>Open to opportunities</div>
        <div className="coords"></div>
        <div className="stamp">Currently in Canberra · May 2026</div>
      </div>
      <nav className={`al-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="al-container">
          <div className="al-nav__inner">
            <a href="/home" className="al-nav__logo">AL</a>
            <ul className="al-nav__links">
              {links.map(([page, idx, label]) => (
                <li key={page}>
                  <a
                    href={page}
                    className={`al-nav__link${current === page ? ' active' : ''}`}
                  ><span className="idx">{idx}</span> {label}</a>
                </li>
              ))}
            </ul>
            <div className="al-nav__actions">
              <div className="al-nav__cta-wrap">
                <Btn href="/contact" variant="primary">Say Hello</Btn>
              </div>
              <button
                className="al-nav__hamburger"
                onClick={() => setMenuOpen(o => !o)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                <span className={`al-hamburger__bar${menuOpen ? ' open' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="al-mobile-menu" onClick={() => setMenuOpen(false)}>
          <div className="al-mobile-menu__panel" onClick={e => e.stopPropagation()}>
            {links.map(([page, idx, label]) => (
              <a
                key={page}
                href={page}
                className={`al-mobile-menu__link${current === page ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="al-mobile-menu__idx">{idx}</span>
                {label}
              </a>
            ))}
            <div className="al-mobile-menu__foot">
              <Btn href="/contact" variant="primary">Say Hello</Btn>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Btn({ href, variant = 'primary', children, ...rest }) {
  return (
    <a href={href} className={`al-btn al-btn--${variant}`} {...rest}>
      {children}
      <Sparkles />
    </a>
  );
}
function Sparkles() {
  const star = (
    <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 0 L11.6 8.4 L20 10 L11.6 11.6 L10 20 L8.4 11.6 L0 10 L8.4 8.4 Z"/></svg>
  );
  return (
    <>
      <span className="spark s1">{star}</span>
      <span className="spark s2">{star}</span>
      <span className="spark s3">{star}</span>
      <span className="spark s4">{star}</span>
    </>
  );
}

window.Nav = Nav;
window.Btn = Btn;
window.Sparkles = Sparkles;
