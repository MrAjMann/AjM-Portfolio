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
        item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle('menu-toggle');
  });
};

navSlide();
