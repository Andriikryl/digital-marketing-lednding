import "./style.css";

const burger = document?.querySelector("[data-burger]");
const header = document.getElementById("page-header");
const intercept = document.createElement("div");
const nav = document?.querySelector("[data-nav]");
const body = document.body;

// Burger-menu
burger?.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger?.classList.toggle("burger--active");
  nav.classList.toggle("nav--visible");
});

// Burger-menu

// Stycki-header

intercept.setAttribute("data-observer-intercept", "");
header.before(intercept);

const observer = new IntersectionObserver(([entry]) => {
  header.classList.toggle("active", !entry.isIntersecting);
});

observer.observe(intercept);

// Stycki-header
