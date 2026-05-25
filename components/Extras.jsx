/* global React */
function Services() {
  return (
    <section className="al-section al-bg-parchment" id="practice" data-screen-label="Practice">
      <div className="al-container">
        <SectionHeader title='Four <em>practices</em>' index="03 / Practice" />
        <div className="al-services">
          {window.PRACTICES.map((s) => (
            <a key={s.slug} href={`/practice?id=${s.slug}`} className={`al-service al-service--${s.tone}`}>
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
  const items = [
    ...(window.LEARNING || []).map((l, i) => ({
      slug: l.slug,
      num: String(i + 1).padStart(2, '0'),
      title: l.title,
      author: l.provider + (l.platform ? ` · ${l.platform}` : ''),
      tag: l.status === 'active' ? 'In Progress' : 'Planned',
      href: `/beyond-work/${l.slug}`,
    })),
    ...(window.CREATIVE || []).map((c, i) => ({
      slug: c.slug,
      num: String((window.LEARNING || []).length + i + 1).padStart(2, '0'),
      title: c.title,
      author: c.meta,
      tag: 'Creative',
      href: `/beyond-work/${c.slug}`,
    })),
  ];

  return (
    <section className="al-section al-bg-chalk" id="beyond-work" data-screen-label="Beyond Work">
      <div className="al-container">
        <SectionHeader title='Beyond <em>work</em>' index="04 / Beyond Work" />
        <ul className="al-reading">
          {items.map((item) => (
            <li key={item.slug} className="al-reading__row">
              <a href={item.href} className="al-reading__link">
                <span className="al-reading__num">{item.num}</span>
                <span className="al-reading__title" dangerouslySetInnerHTML={{ __html: item.title }} />
                <span className="al-reading__author">{item.author}</span>
                <span className="al-reading__tag">{item.tag}</span>
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
