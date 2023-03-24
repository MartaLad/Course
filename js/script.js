const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const body = document.body;
const navItems = nav.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger--active');
  nav.classList.toggle('nav--visible');
})

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--visible');
  })
})

