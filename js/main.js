/* ============================================
   MAIN JS — Atlas Portfolio
   ============================================ */

/* --- Nav: add .scrolled class on scroll --- */
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* --- Category filter --- */
const pills = document.querySelectorAll('.pill[data-filter]');
const cards = document.querySelectorAll('.card[data-category]');

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    const filter = pill.dataset.filter;

    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

/* --- Scroll-in animation (Intersection Observer) --- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
