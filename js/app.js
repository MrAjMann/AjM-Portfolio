// Select DOM Items
const menuBody = document.querySelector(".body");
const menuBtn = document.querySelector(".burgerMenu");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menuNav");
const menuBranding = document.querySelector(".menuPortrait");
const navItems = document.querySelectorAll(".navItem");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBody.classList.add("show");
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBody.classList.remove("show");
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
  HTMLBodyElement.ontouchend = (e) => {
    e.preventDefault();
  };
}
