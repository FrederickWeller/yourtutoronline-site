// Shared nav/footer include, mirroring the pattern used on frederickweller.io
function includePartial(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  fetch(url)
    .then((r) => r.text())
    .then((html) => { el.innerHTML = html; })
    .catch(() => { /* fail quietly if a partial can't load */ });
}
document.addEventListener('DOMContentLoaded', () => {
  includePartial('#nav-placeholder', '/partials/nav.html');
  includePartial('#footer-placeholder', '/partials/footer.html');
});
