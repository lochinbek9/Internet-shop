"use strict";

// SITE-LOADING

window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".lds-hourglass");
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";
  }, 5000);
});

// menu-btn
const headerMenuBtn = document.querySelector(".header__menu-btn");
const headerNavbar = document.querySelector(".header__navbar");
const headerNavigationAddtion = document.querySelector(
  ".header__navigation--addtion"
);

headerMenuBtn.addEventListener("click", () => {
  headerNavbar.style.display = "none";
  headerNavigationAddtion.style.display = "flex";
});

headerNavigationAddtion.addEventListener("click", () => {
  headerNavigationAddtion.style.display = "none";
  headerNavbar.style.display = "flex";
});
