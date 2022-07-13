
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const body = document.body;

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('header__burger--active');
  nav.classList.toggle('header__menu--visible');
});