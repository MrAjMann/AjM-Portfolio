// Select DOM Items for menu
const menuBody = document.querySelector(".body");
const menuBtn = document.querySelector(".burgerMenu");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menuNav");
const menuBranding = document.querySelector(".menuPortrait");
const navItems = document.querySelectorAll(".navItem");

// Select project buttons
const projectBtn = document.querySelector(".projectBtn");

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

projectBtn.addEventListener("click", gotoProject);

function gotoProject() {
  window.open("https://github.com/MrAjMann/MedMinder");
}
