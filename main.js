//selectors
const burger = document.querySelector(".nav-burger");
const nav = document.querySelector(".nav");
const navLogo = document.querySelector(".nav-logo");
const [...qnaList] = document.querySelectorAll(".faq-container");
const [...featuresBtnsList] = document.querySelectorAll(".features-btn");
const [...featuresTabsList] = document.querySelectorAll(".features-tab");

//global variables
let menuIsOpen = false;

//functions
const closeMenu = () => {
  nav.classList.remove("active");
  navLogo.src = "assets/logos/logo-bookmark.svg";
  burger.src = "assets/icons/icon-hamburger.svg";
  menuIsOpen = !menuIsOpen;
};

const openMenu = () => {
  nav.classList.add("active");
  navLogo.src = "assets/logos/logo-bookmark-mobile-menu.svg";
  burger.src = "assets/icons/icon-close.svg";
  menuIsOpen = !menuIsOpen;
};

const closeMenuOnDesktopView = () => {
  const width = window.innerWidth;
  if (width >= 820 && menuIsOpen) closeMenu();
};

function showQuestion() {
  this.classList.toggle("active");
}

function switchTabs() {
  const targetedBtn = this;
  const index = targetedBtn.dataset.tabIndex;

  featuresBtnsList.forEach((btn) => btn.classList.remove("active"));
  targetedBtn.classList.add("active");

  featuresTabsList.forEach((tab) => tab.classList.remove("active"));
  featuresTabsList.find((tab) => tab.dataset.tabIndex === index).classList.add("active");
}

const init = () => {
  burger.addEventListener("click", () => {
    menuIsOpen ? closeMenu() : openMenu();
  });
  window.addEventListener("resize", closeMenuOnDesktopView);
  qnaList.forEach((qna) => qna.addEventListener("click", showQuestion));
  featuresBtnsList.forEach((btn) => btn.addEventListener("click", switchTabs));
};

init();
