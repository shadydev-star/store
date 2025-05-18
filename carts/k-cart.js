let kCart = JSON.parse(localStorage.getItem('kCart')) || [];

function saveToStorage() {
  localStorage.setItem('kCart', JSON.stringify(kCart));
}

function addToCart(productId, quantity = 1) {
  const existingItem = kCart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    kCart.push({ productId, quantity });
  }
  saveToStorage();
  updateCartQuantityDisplay();
  
  // Dispatch event to notify other pages
  window.dispatchEvent(new Event('cartUpdated'));
}

function removeFromCart(productId) {
  kCart = kCart.filter(item => item.productId !== productId);
  saveToStorage();
  updateCartQuantityDisplay();
  window.dispatchEvent(new Event('cartUpdated'));
}

function updateCartQuantityDisplay() {
  const quantity = kCart.reduce((total, item) => total + item.quantity, 0);
  const quantityElements = document.querySelectorAll('.js-cart-quantity');
  quantityElements.forEach(element => {
    element.textContent = quantity;
  });
}

// Initialize on page load
updateCartQuantityDisplay();