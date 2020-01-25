const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.menu-nav');
  const navItems = document.querySelectorAll('.nav-item');

  burger.addEventListener('click', () => {
    nav.classList.toggle('menu-nav-active');

    navItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = '';
      } else {
        item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle('menu-toggle');
  });
};
const prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '5px';
  }
  prevScrollpos = currentScrollPos;
};
navSlide();
