"use strict";

/* ----- BASE ------ */

// Get required selectors to manipulate menu toggle
const navbar = document.querySelector(".navbar");
const menuTogglersContainer = document.querySelector(".menu-togglers");
const bxMenu = document.querySelector(".bx-menu");

/* -- Show/Hide Menu -- */
menuTogglersContainer.addEventListener("click", () => {
  // Toggle the 'show-nav' class on the navbar
  navbar.classList.toggle("show-nav");
});

/* ================================================ */

/* -------- Theme Changing -------- */
const themeTogglers = document.querySelector(".theme-togglers");
const lightIcon = document.querySelector(".bxs-sun");
const darkIcon = document.querySelector(".bxs-moon");

let lightmode = localStorage.getItem("lightmode");

// Enable Light Mode
const enableLightMode = () => {
  // Add 'lightmode' class to the body
  document.body.classList.add("lightmode");
  localStorage.setItem("lightmode", "enabled");
  // Update theme toggle icons
  lightIcon.style.display = "none";
  darkIcon.style.display = "block";
};

// Check and enable light mode if previously enabled
if (lightmode && lightmode === "enabled") {
  enableLightMode();
}

// Disable Light Mode
const disableLightMode = () => {
  // Remove 'lightmode' class from the body
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode", null);
  // Update theme toggle icons
  lightIcon.style.display = "block";
  darkIcon.style.display = "none";
};

// Toggle Light/Dark Mode on click
themeTogglers.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode");
  if (!lightmode || lightmode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});

/* -- Show Hero Buttons with Delay -- */
const heroButtonsContainer = document.querySelector(".hero-btns-container");
const delayTime = 1000;

heroButtonsContainer.style.transition = "opacity 1000ms";

setTimeout(() => {
  heroButtonsContainer.style.opacity = 1;
}, delayTime);

/* --- Prevent Form Submission on Contact Section --- */
const sendMsgButton = document.querySelector(".send-msg-btn");
sendMsgButton.addEventListener("click", (e) => {
  e.preventDefault();
});
