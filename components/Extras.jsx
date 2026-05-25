/* global React */
function Services() {
  return (
    <section className="al-section al-bg-parchment" id="practice" data-screen-label="Practice">
      <div className="al-container">
        <SectionHeader title='Four <em>practices</em>' index="03 / Practice" />
        <div className="al-services">
          {window.PRACTICES.map((s) => (
            <a key={s.slug} href={`practice.html?id=${s.slug}`} className={`al-service al-service--${s.tone}`}>
              <div className="al-service__tag">{s.tag}</div>
              <h3 className="al-service__title">{s.title}</h3>
              <p className="al-service__body">{s.short}</p>
              <div className="al-service__tools">
                <span>{s.tools}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="al-service__arrow"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reading() {
  return (
    <section className="al-section al-bg-chalk" id="reading" data-screen-label="Reading">
      <div className="al-container">
        <SectionHeader title='Currently <em>reading</em>' index="04 / Reading" />
        <ul className="al-reading">
          {window.READING.map((b) => (
            <li key={b.slug} className="al-reading__row">
              <a href={`book.html?id=${b.slug}`} className="al-reading__link">
                <span className="al-reading__num">{b.num}</span>
                <span className="al-reading__title" dangerouslySetInnerHTML={{ __html: b.title }} />
                <span className="al-reading__author">{b.author}</span>
                <span className="al-reading__tag">{b.tag}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="al-reading__arrow"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Object.assign(window, { Services, Reading });
