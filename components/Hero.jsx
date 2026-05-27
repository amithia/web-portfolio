/* global React */
const { useState } = React;

/* ─────────────────────────────────────────────
   PhotoStack — clickable stacked postcards.
   Click the top card → it flies off, animates back behind the deck.
   Replace each card's icon/label/colour with real photos later
   (use <img src="..."/> inside .al-photo-card__art).
   ───────────────────────────────────────────── */
function PhotoStack() {
  const cards = [
  { tone: 'cherry', photo: '/assets/photos/card-1.jpg', caption: 'Pitching a startup idea', place: 'Vietnam · 2024' },
  { tone: 'lilac',  photo: '/assets/photos/card-2.jpg', caption: 'Visiting the Amazon office',  place: 'Vietnam · 2024' },
  { tone: 'bubble', photo: '/assets/photos/card-3.jpg', caption: 'Quick vacation', place: 'Singapore · 2025' },
  { tone: 'moss',   photo: '/assets/photos/card-4.jpg', caption: 'Annual trip to the coast', place: 'Gold Coast · 2025' },
  { tone: 'cream',  photo: '/assets/photos/card-5.jpg', caption: 'Hot-air balloon watching', place: 'Canberra · 2024' }, 
  { tone: 'cherry', photo: '/assets/photos/card-6.jpg', caption: 'Born a programmer', place: 'Sri Lanka · 2004' },
  { tone: 'lilac',  photo: '/assets/photos/card-7.jpg', caption: 'With my besties', place: 'Sydney · 2026' },
  { tone: 'bubble', photo: '/assets/photos/card-8.jpg', caption: 'My music taste', place: 'Sydney · 2026' },
  { tone: 'moss',   photo: '/assets/photos/card-9.jpg', caption: 'In Da Nang', place: 'Vietnam · 2024' },
  { tone: 'cream',  photo: '/assets/photos/card-10.jpg', caption: 'With more besties', place: 'Canberra · 2024' },];


  const [order, setOrder] = useState(cards.map((_, i) => i));
  // flying: null | 'up' | 'tilt' | 'down' — four-phase shuffle
  const [flying, setFlying] = useState(null);

  const flipTop = () => {
    if (flying != null) return;
    // Phase 1 (0 → 480ms): lift straight up, slight CCW tilt.
    setFlying('up');
    // Phase 2 (480 → 760ms): at the apex, tilt right (CW) as if the
    // card is being turned over to slide back into the deck.
    setTimeout(() => setFlying('tilt'), 480);
    // Phase 3 (760 → 1450ms): drop z-index BEHIND and descend into
    // the back slot. Lower half of descent gets occluded by cards 1–3.
    setTimeout(() => setFlying('down'), 760);
    setTimeout(() => {
      setOrder((o) => [...o.slice(1), o[0]]);
      setFlying(null);
    }, 1450);
  };

  const ICONS = {
    flame: <g><path d="M20 4 C 24 11, 32 16, 32 24 C 32 30, 26 36, 20 36 C 14 36, 8 30, 8 24 C 8 19, 11 17, 13 16 C 13 21, 15 23, 17 23 C 17 17, 19 11, 20 4 Z" fill="#E54B3C" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round"/><path d="M20 18 C 23 22, 26 25, 26 29 C 26 32, 23 34, 20 34 C 17 34, 14 32, 14 29 C 14 25, 17 22, 20 18 Z" fill="#FCF7E5"/></g>,
    heart: <path d="M20 34 C 20 34, 6 26, 6 16 A 7 7 0 0 1 20 12 A 7 7 0 0 1 34 16 C 34 26, 20 34, 20 34 Z" fill="#E54B3C" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round" />,
    globe: <g><circle cx="20" cy="20" r="14" fill="#B9A6E0" stroke="#1A1612" strokeWidth="2" /><ellipse cx="20" cy="20" rx="6" ry="14" fill="none" stroke="#1A1612" strokeWidth="1.5" /><line x1="6" y1="20" x2="34" y2="20" stroke="#1A1612" strokeWidth="1.5" /><circle cx="27" cy="14" r="2" fill="#E54B3C" /></g>,
    star: <path d="M20 4 L 24 16 L 36 18 L 27 25 L 30 36 L 20 30 L 10 36 L 13 25 L 4 18 L 16 16 Z" fill="#E54B3C" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round" />,
    flower: <g transform="translate(20 22)">{[0, 72, 144, 216, 288].map((rot, i) => <ellipse key={i} cx={[0, 9, 6, -6, -9][i]} cy={[-10, -3, 8, 8, -3][i]} rx="6" ry="9" fill="#EE7BA8" stroke="#1A1612" strokeWidth="2" transform={`rotate(${rot} ${[0, 9, 6, -6, -9][i]} ${[-10, -3, 8, 8, -3][i]})`} />)}<circle r="5" fill="#FCF7E5" stroke="#1A1612" strokeWidth="1.5" /><circle r="2" fill="#E54B3C" /></g>,
    pin: <g><path d="M20 4 C 13 4, 8 9, 8 16 C 8 25, 20 36, 20 36 C 20 36, 32 25, 32 16 C 32 9, 27 4, 20 4 Z" fill="#FCF7E5" stroke="#1A1612" strokeWidth="2" strokeLinejoin="round" /><circle cx="20" cy="15" r="4.5" fill="#1A1612" /><circle cx="20" cy="15" r="1.6" fill="#EE7BA8" /></g>
  };

  return (
    <div className="al-photo-stack" onClick={flipTop} aria-label="Photo deck — click to flip">
      {order.map((cardIdx, pos) => {
        const card = cards[cardIdx];
        const isTop = pos === 0;
        const offsetY = pos * 14;
        const rotate = (pos - 1) * 4 - 2; // alternating tilt
        const scale = 1 - pos * 0.04;
        const zIndex = 50 - pos;

        // Resting transform for this slot — used both at rest AND as
        // the phase-2 target of the top card so handoff is invisible.
        const restingTransform = `translate(${pos * 8}px, ${offsetY}px) rotate(${rotate}deg) scale(${scale})`;

        let style;
        if (isTop && flying === 'up') {
          // Lift straight up, slight CCW tilt, gently scaled up.
          style = {
            zIndex: 60,
            transform: 'translate(-4px, -90px) rotate(-5deg) scale(1.03)',
            opacity: 1,
            transition: 'transform 480ms cubic-bezier(0.34, 1.2, 0.5, 1)'
          };
        } else if (isTop && flying === 'tilt') {
          // Hold at apex, rotate CW (rightward tilt) to telegraph the
          // pivot back into the deck. Still on top, fully visible.
          style = {
            zIndex: 60,
            transform: 'translate(8px, -86px) rotate(10deg) scale(1.03)',
            opacity: 1,
            transition: 'transform 280ms cubic-bezier(0.45, 0, 0.4, 1)'
          };
        } else if (isTop && flying === 'down') {
          // Drop behind the deck and descend into the back slot.
          // Same easing as the lift for symmetrical motion. The lower
          // half of the descent is progressively occluded by cards 1–3.
          const backTransform = `translate(${4 * 8}px, ${4 * 14}px) rotate(${(4 - 1) * 4 - 2}deg) scale(${1 - 4 * 0.04})`;
          style = {
            zIndex: 0,
            transform: backTransform,
            opacity: 1,
            transition: 'transform 690ms cubic-bezier(0.34, 1.2, 0.5, 1)'
          };
        } else {
          style = {
            zIndex,
            transform: restingTransform,
            opacity: pos > 3 ? 0 : 1,
            transition:
            'transform 520ms cubic-bezier(0.16, 1, 0.3, 1), opacity 380ms ease-out'
          };
        }

        return (
          <div
            key={cardIdx}
            className={`al-photo-card al-photo-card--${card.tone}`}
            style={style}>
            
            <div className="al-photo-card__art">
              <img src={card.photo} alt={card.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="al-photo-card__caption" style={{ opacity: pos === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>
              <span className="al-photo-card__title">{card.caption}</span>
              <span className="al-photo-card__place">{card.place}</span>
            </div>
            <div className="al-photo-card__hint" style={{ opacity: pos === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>
              Click Through My Life
            </div>
          </div>);

      })}
    </div>);

}

function Hero() {
  return (
    <section className="al-hero" id="home" data-screen-label="Hero">
      <div className="al-hero__bling" aria-hidden="true">
        <svg className="x1" viewBox="0 0 20 20" fill="#E54B3C"><path d="M10 0 L11.6 8.4 L20 10 L11.6 11.6 L10 20 L8.4 11.6 L0 10 L8.4 8.4 Z" /></svg>
        <svg className="x2" viewBox="0 0 20 20" fill="#EE7BA8"><path d="M10 0 L11.6 8.4 L20 10 L11.6 11.6 L10 20 L8.4 11.6 L0 10 L8.4 8.4 Z" /></svg>
        <svg className="x3" viewBox="0 0 20 20" fill="#B9A6E0"><path d="M10 0 L11.6 8.4 L20 10 L11.6 11.6 L10 20 L8.4 11.6 L0 10 L8.4 8.4 Z" /></svg>
        <svg className="x4" viewBox="0 0 20 20" fill="#E54B3C"><path d="M10 0 L11.6 8.4 L20 10 L11.6 11.6 L10 20 L8.4 11.6 L0 10 L8.4 8.4 Z" /></svg>
      </div>
      <div className="al-container">
        <div className="al-hero__grid">
          <div className="al-hero__content" data-comment-anchor="9c49413224-div-136-11">
            <p className="al-hero__eyebrow">
              <span className="badge">Web Project Officer</span>
              <span className="badge">Full-Stack Developer</span>
            </p>
            <h1 className="al-hero__title">
              <span className="word">Work</span>{' '}
              <span className="word">that</span>{' '}
              <span className="word">has</span>{' '}
              <span className="word"><em>purpose</em>.</span>
            </h1>
            <p className="al-hero__subtitle">
              <br></br>
              A collection of projects I've built across full-stack software, AI integrations and data — some shipped, some ongoing, but all worth sharing.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Btn href="#work" variant="cherry">View My Work</Btn>
              <Btn href="#about" variant="chalk">Learn More About Me</Btn>
            </div>
            <div className="al-hero__meta" data-comment-anchor="e0ff07d39f-div-154-13">
              <span className="al-hero__chip"><span className="dot" style={{ background: '#E54B3C' }}></span>Full-Stack Development</span>
              <span className="al-hero__chip"><span className="dot" style={{ background: '#6B7A3F' }}></span>UI/UX</span>
              <span className="al-hero__chip"><span className="dot" style={{ background: '#EE7BA8' }}></span>Mobile Apps</span>
              <span className="al-hero__chip"><span className="dot" style={{ background: '#B9A6E0' }}></span>AI</span>
              <span className="al-hero__chip"><span className="dot" style={{ background: '#571aff' }}></span>Data &amp; Analytics</span>
              <span className="al-hero__chip"><span className="dot" style={{ background: '#e4d837' }}></span>Consulting</span>
              <span className="al-hero__chip"><span className="dot" style={{ background: '#37e4cd' }}></span>Start-up Builds</span>
            </div>
          </div>
          <div className="al-hero__stack-wrap" data-comment-anchor="483d53d25e-div-163-11">
            <PhotoStack />
          </div>
        </div>
      </div>
    </section>);

}
window.Hero = Hero;