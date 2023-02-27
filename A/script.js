const cartButton = document.getElementById("cart-button");
const cartContainer = document.getElementById("cart-container");
const closeCartButton = document.getElementById("close-cart-button");

cartButton.addEventListener("click", () => {
  cartContainer.classList.add("open");
});

closeCartButton.addEventListener("click", () => {
  cartContainer.classList.remove("open");
});