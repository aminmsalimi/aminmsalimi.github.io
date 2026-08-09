
const root = document.documentElement;
const themeButton = document.querySelector('[data-theme-toggle]');
const storageKey = document.body.dataset.themeKey || 'amin-portfolio-theme';

const saved = localStorage.getItem(storageKey);
root.dataset.theme = saved === 'dark' ? 'dark' : 'light';

themeButton?.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  localStorage.setItem(storageKey, next);
});

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const items = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: .08 });
  items.forEach(item => io.observe(item));
} else {
  items.forEach(item => item.classList.add('is-visible'));
}
