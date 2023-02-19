"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".lds-hourglass");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.display = "none";
  }, 5000);
});
