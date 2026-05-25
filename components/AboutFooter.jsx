/* global React */
function About() {
  return (
    <section className="al-section al-bg-parchment" id="about" data-screen-label="About">
      <div className="al-container">
        <SectionHeader title='About <em>me</em>' index="02 / About" />
        <div className="al-about">
          <div className="al-about__image">
            <div className="al-about__placeholder">AL</div>
            <div className="al-about__stamp">GLOBAL<br />· CITIZEN ·</div>
          </div>
          <div>
            <p className="al-eyebrow" style={{ color: 'var(--color-cherry)', marginBottom: '1rem' }}>Hello, I'm Amithi</p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-2xl)', marginBottom: '1.5rem', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              I make complex things clear,<br /><em style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontWeight: 400, color: 'var(--color-cherry)' }}>and impactful things human.</em>
            </h3>
            <p style={{ marginBottom: '1.5rem', color: '#3a3530', lineHeight: 1.7 }}>
              I'm a designer, developer, and co-founder — originally from Sri Lanka, formed by years at the Australian National University in Canberra, and currently based in Lisbon. I work across UX design, mobile development, AI integration, and data analytics.
            </p>
            <p style={{ marginBottom: '2rem', color: '#3a3530', lineHeight: 1.7 }}>
              I co-founded Ion Studio to help mobile teams ship AI features that work. My other work includes university research, web projects at ANU, student housing design, food systems, and the occasional statistics tool I built because nothing else existed.
            </p>
            <div className="al-countries">
              <span className="al-country"><span className="dot" style={{ background: '#E54B3C' }}></span>Sri Lanka</span>
              <span className="al-country"><span className="dot" style={{ background: '#6B7A3F' }}></span>Australia</span>
              <span className="al-country"><span className="dot" style={{ background: '#EE7BA8' }}></span>Portugal</span>
              <span className="al-country"><span className="dot" style={{ background: '#1A1612' }}></span>+ exploring</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="al-footer" id="contact" data-screen-label="Footer">
      <div className="al-container">
        <div className="al-footer__inner">
          <div data-comment-anchor="6522278850-div-42-11">
            <p className="al-footer__cta">
              Let's make<br />something <em>worth</em><br />remembering.
            </p>
            <Btn href="mailto:hello@amithi.com" variant="chalk">hello@amithi.com</Btn>
          </div>
          <ul className="al-footer__links" data-comment-anchor="5d97c6fe4b-ul-48-11">
            <li><a href="#" className="al-footer__link">LinkedIn</a></li>
            <li><a href="#" className="al-footer__link">Are.na</a></li>
            <li><a href="#" className="al-footer__link">GitHub</a></li>
            <li><a href="courses.html" className="al-footer__link">Learning</a></li>
            <li><a href="#" className="al-footer__link">Download CV</a></li>
          </ul>
        </div>
        <div className="al-footer__bottom">
          <span>© 2026 Amithi Liyanagamage</span>
          <span>Made slowly. Made with care.</span>
          <a href="sitemap.html" style={{ fontFamily: 'var(--font-mono)', fontSize: '.65rem', letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(252,247,229,.4)', textDecoration: 'none' }} onMouseOver={e => e.target.style.color='rgba(252,247,229,.8)'} onMouseOut={e => e.target.style.color='rgba(252,247,229,.4)'}>Sitemap</a>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { About, Footer });