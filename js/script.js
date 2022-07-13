
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const body = document.body;
const navItems = nav?.querySelectorAll('a')

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('header__burger--active');
  nav.classList.toggle('header__menu--visible');
});

navItems.forEach(el => [
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('header__burger--active');
    nav.classList.remove('header__menu--visible');
  })
])