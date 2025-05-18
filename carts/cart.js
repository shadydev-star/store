// cart.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId, quantity = 1) {
  const existingItem = cart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  saveToStorage();
  updateCartQuantityDisplay();
  
  // Dispatch event to notify other pages
  window.dispatchEvent(new Event('cartUpdated'));
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  saveToStorage();
  updateCartQuantityDisplay();
  window.dispatchEvent(new Event('cartUpdated'));
}

function updateCartQuantityDisplay() {
  const quantity = cart.reduce((total, item) => total + item.quantity, 0);
  const quantityElement = document.querySelector('.js-cart-quantity');
  if (quantityElement) {
    quantityElement.textContent = quantity;
  }
}

// Initialize on page load
updateCartQuantityDisplay();