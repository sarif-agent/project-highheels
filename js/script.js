console.log(`Console Says: "I'm Alive!"`);

const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");


const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");


const staticProducts = document.querySelectorAll(".cart-item");
staticProducts.forEach((product) => product.remove());


const cartContainer = document.querySelector(".cart-items-container");
const addToCartButtons = document.querySelectorAll(".menu .btn");


function createCartItem(imageSrc, name, price) {
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fas", "fa-times");
  closeIcon.addEventListener("click", () => cartItem.remove());

  const img = document.createElement("img");
  img.src = imageSrc;

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");

  const h3 = document.createElement("h3");
  h3.textContent = name;

  const priceDiv = document.createElement("div");
  priceDiv.classList.add("price");
  priceDiv.textContent = `$${price}`;

  contentDiv.append(h3, priceDiv);
  cartItem.append(closeIcon, img, contentDiv);
  cartContainer.append(cartItem);
}


addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent page scroll on add to cart
    const productBox = e.target.closest(".box");
    const productImage = productBox.querySelector("img").src;
    const productName = productBox.querySelector("h3").textContent;
    const productPrice = productBox.querySelector(".price").textContent.split(" ")[0].substring(1);

    createCartItem(productImage, productName, productPrice);
    cartContainer.classList.add("active");
  });
});


document.querySelector(".search-form i").addEventListener("click", () => {
  window.open("https://i.imgflip.com/271e1r.jpg", "_blank");
});

document.querySelector("#search-box").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    window.open("https://i.imgflip.com/271e1r.jpg", "_blank");
  }
});

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
});


document.querySelector(".btn[href='#']").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmlja3JvbGwg", "_blank"); // Open in a new tab
});


document.addEventListener("dragstart", function (event) {
  if (event.target.tagName === "img") {
    event.preventDefault();
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  images.forEach(function (image) {
    image.oncontextmenu = function () {
      return false;
    };
  });
});

cartBtn.addEventListener("click", function () {
  cartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem)) {
      cartItem.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});
