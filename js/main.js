console.log("JavaScript File is linked");
// Variables
const hamburgerMenu = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".mobile-nav a");

// Functions
function toggleMenu() {
    mobileNav.classList.toggle("is-open");
    hamburgerMenu.classList.toggle("is-open");
    if (mobileNav.classList.contains("is-open")) {
        hamburgerMenu.setAttribute("aria-expanded", "true");
        hamburgerMenu.setAttribute("aria-label", "Close menu");
    } else {
        hamburgerMenu.setAttribute("aria-expanded", "false");
        hamburgerMenu.setAttribute("aria-label", "Open menu");
    }
}

function closeMenu() {
    mobileNav.classList.remove("is-open");
    hamburgerMenu.classList.remove("is-open");
    hamburgerMenu.setAttribute("aria-expanded", "false");
    hamburgerMenu.setAttribute("aria-label", "Open menu");
}

function closeNavLink(navLink) {
    navLink.addEventListener("click", closeMenu);
}

// Event Listeners
hamburgerMenu.addEventListener("click", toggleMenu);
navLinks.forEach(closeNavLink);