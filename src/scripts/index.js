import App from './views/app';
import '../styles/main.css';
import '../styles/responsive.css';

const app = new App({
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

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

// Show the "Back to Top" button when the user scrolls down
window.addEventListener('scroll', () => {
  const backToTopButton = document.querySelector('.btn-back-to-top');
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Scroll to the top of the page when the button is clicked with smooth behavior
document.querySelector('.btn-back-to-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
