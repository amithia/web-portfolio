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
        <div className="al-now__title">The Alignment <em>Problem</em></div>
        <div className="al-now__sub">Brian Christian · W. W. Norton, 2020</div>
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
      <div className="al-stamp__val">Lisbon &amp; <em>elsewhere</em></div>
      <div className="al-stamp__coords">38.7223° N · 9.1393° W</div>
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

function Poll() {
  return (
    <div className="al-poll" data-comment-anchor="3273dcaa55-div-61-5">
      <div className="al-poll__q">This week: <em>what should I build next?</em></div>
      <div className="al-poll__opts">
        <button className="al-poll__opt lead">Villain predictor<span className="pct">47%</span></button>
        <button className="al-poll__opt">Coffee stamp tracker<span className="pct">31%</span></button>
        <button className="al-poll__opt">Music chatbot<span className="pct">22%</span></button>
      </div>
    </div>);

}

Object.assign(window, { NowReading, Stamp, Stats, SectionHeader, Poll });