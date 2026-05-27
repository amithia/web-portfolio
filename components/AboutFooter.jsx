/* global React */
function About() {
  return (
    <section className="al-section al-bg-parchment" id="about" data-screen-label="About" style={{ paddingBottom: 0 }}>
      <div className="al-container">
        {/* <SectionHeader title='About <em>me</em>' index="02 / About" /> */}
        <div className="al-about">
          <div className="al-about__image">
            <img
              src="/assets/photos/home-profile.jpg"
              alt="Me standing in front of the coloured houses in Singapore."
            />
            <div className="al-about__stamp">ALWAYS<br />· BUILDING ·</div>
          </div>
          <div>
            <p className="al-eyebrow" style={{ color: 'var(--color-cherry)', marginBottom: '1rem' }}>Hi there, I'm Amithi</p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-2xl)', marginBottom: '1.5rem', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              I write code and analyse data <em style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontWeight: 400, color: 'var(--color-cherry)' }}>with people who care.</em>
            </h3>
            <p style={{ marginBottom: '1.5rem', color: '#3a3530', lineHeight: 1.7 }}>
              I'm a full-stack developer with an interest in data analytics based in Canberra. I currently work in Digital Strategy, Insights & Analytics at the Australian National University as a Web Project Officer and as a developer/founder at Ion Studio. My work spans web development, data analytics and AI.
            </p>
            <p style={{ marginBottom: '2rem', color: '#3a3530', lineHeight: 1.7 }}>
              With a background in computing and data science (also from ANU!), I've had the opportunity to work on a variety of projects across different industries, including education, healthcare and e-commerce. I'm passionate about using technology to solve real-world problems and create meaningful experiences for users.
            </p>
            <div className="al-countries">
              <span className="al-country"><span className="dot" style={{ background: '#6B7A3F' }}></span>Australia</span>
              <span className="al-country"><span className="dot" style={{ background: '#E54B3C' }}></span>Sri Lanka</span>
              <span className="al-country"><span style={{ background: '#1A1612' }}></span>+ exploring</span>
            </div>
          </div>
        </div>       
      </div>
      <div className="al-container">
        <Stats items={[
          { num: '5+', label: 'Years in the industry' },
          { num: '6',  label: 'Projects shipped' },
          { num: '10+',  label: 'Countries visited' },
          { num: '4000+',  label: 'Cups of coffee consumed' },
        ]} />
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
            <Btn href="mailto:aliyanagamage@gmail.com" variant="chalk">Chuck me an email</Btn>
          </div>
          <ul className="al-footer__links" data-comment-anchor="5d97c6fe4b-ul-48-11">
            <li><a href="#" className="al-footer__link">LinkedIn</a></li>
            <li><a href="#" className="al-footer__link">GitHub</a></li>
            <li><a href="/beyond-work" className="al-footer__link">Learning</a></li>
            <li><a href="#" className="al-footer__link">Download CV</a></li>
          </ul>
        </div>
        <div className="al-footer__bottom">
          <span>© 2026 Amithi Liyanagamage</span>
          <span>Made with care.</span>
          <a href="/sitemap" style={{ fontFamily: 'var(--font-mono)', fontSize: '.80rem', letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(252,247,229,.4)', textDecoration: 'none' }} onMouseOver={e => e.target.style.color='rgba(252,247,229,.8)'} onMouseOut={e => e.target.style.color='rgba(252,247,229,.4)'}>Sitemap</a>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { About, Footer });