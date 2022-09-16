const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", muestraDesktopMenu);

function muestraDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

const menuHamburgesa = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuHamburgesa.addEventListener("click", muestramobileMenu);

function muestramobileMenu() {
  mobileMenu.classList.toggle("inactive");
}

const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

navbarShoppingCart.addEventListener("click", togglecarritoAside);

function togglecarritoAside() {
  aside.classList.toggle("inactive");
}
