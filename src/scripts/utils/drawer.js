document.addEventListener('DOMContentLoaded', () => {
  const menuBar = document.querySelector('.menu-bar');
  const menuNav = document.querySelector('.menu');
  const navBar = document.querySelector('.navbar');

  menuBar.addEventListener('click', () => {
    menuNav.classList.toggle('menu-active');
  });

  window.addEventListener('scroll', () => {
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle('scrolling-active', windowPosition);
    menuNav.classList.remove('menu-active');
  });
});
