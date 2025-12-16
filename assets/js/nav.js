const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navlinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Menü aç/kapa
});
