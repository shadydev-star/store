let cCart = JSON.parse(localStorage.getItem('cCart')) || [];

function saveToStorage() {
  localStorage.setItem('cCart', JSON.stringify(cCart));
}

function addToCart(productId, quantity = 1) {
  const existingItem = cCart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cCart.push({ productId, quantity });
  }
  saveToStorage();
  updateCartQuantityDisplay();
  
  // Dispatch event to notify other pages
  window.dispatchEvent(new Event('cartUpdated'));
}

function removeFromCart(productId) {
  cCart = cCart.filter(item => item.productId !== productId);
  saveToStorage();
  updateCartQuantityDisplay();
  window.dispatchEvent(new Event('cartUpdated'));
}

function updateCartQuantityDisplay() {
  const quantity = cCart.reduce((total, item) => total + item.quantity, 0);
  const quantityElements = document.querySelectorAll('.js-cart-quantity');
  quantityElements.forEach(element => {
    element.textContent = quantity;
  });
}

// Initialize on page load
updateCartQuantityDisplay();