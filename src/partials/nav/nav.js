let nav, navToggle;
document.addEventListener('DOMContentLoaded', () => {
  nav = document.getElementById('nav');
  navToggle = document.getElementById('nav_toggle');
  navToggle.onclick = () => {
    if (nav.classList.contains('Nav__Container--opened')) {
      nav.classList.remove('Nav__Container--opened');
      nav.classList.add('Nav__Container--closed');

      navToggle.classList.remove('Nav__Toggle--opened');
      navToggle.classList.add('Nav__Toggle--closed');

      navToggle.textContent = 'MENU';
    } else {
      nav.classList.add('Nav__Container--opened');
      nav.classList.remove('Nav__Container--closed');

      navToggle.classList.add('Nav__Toggle--opened');
      navToggle.classList.remove('Nav__Toggle--closed');

      navToggle.textContent = 'CLOSE';
    }
  };
});
