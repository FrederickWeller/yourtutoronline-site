// Shared nav/footer include, mirroring the pattern used on frederickweller.io.
// Bump ASSET_VERSION (and the ?v= on style.css / include.js in each page)
// whenever the CSS or partials change, so browsers don't keep a cached copy.
const ASSET_VERSION = '20261030b';

function includePartial(selector, url, after) {
  const el = document.querySelector(selector);
  if (!el) return;
  fetch(url + '?v=' + ASSET_VERSION)
    .then((r) => r.text())
    .then((html) => { el.innerHTML = html; if (after) after(el); })
    .catch(() => { /* fail quietly if a partial can't load */ });
}
document.addEventListener('DOMContentLoaded', () => {
  includePartial('#nav-placeholder', '/partials/nav.html');
  includePartial('#footer-placeholder', '/partials/footer.html', (el) => {
    // Scripts inside innerHTML don't run, so set the footer year here.
    const y = el.querySelector('#year');
    if (y) y.textContent = new Date().getFullYear();
  });
});
