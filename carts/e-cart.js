// cart.js
let eCart = JSON.parse(localStorage.getItem('eCart')) || [];

function saveToStorage() {
  localStorage.setItem('eCart', JSON.stringify(eCart));
}

function addToCart(productId, quantity = 1) {
  const existingItem = eCart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    eCart.push({ productId, quantity });
  }
  saveToStorage();
  updateCartQuantityDisplay();
  
  // Dispatch event to notify other pages
  window.dispatchEvent(new Event('cartUpdated'));
}

function removeFromCart(productId) {
  eCart = eCart.filter(item => item.productId !== productId);
  saveToStorage();
  updateCartQuantityDisplay();
  window.dispatchEvent(new Event('cartUpdated'));
}

function updateCartQuantityDisplay() {
  const quantity = eCart.reduce((total, item) => total + item.quantity, 0);
  const quantityElements = document.querySelectorAll('.js-cart-quantity');
  quantityElements.forEach(element => {
    element.textContent = quantity;
  });
}

// Initialize on page load
updateCartQuantityDisplay();