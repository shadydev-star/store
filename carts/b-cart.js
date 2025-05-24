let bCart = JSON.parse(localStorage.getItem('bCart')) || [];

function saveToStorage() {
  localStorage.setItem('bCart', JSON.stringify(bCart));
}


function addToCart(productId, quantity = 1) {
  const existingItem = bCart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    bCart.push({ productId, quantity });
  }
  saveToStorage();
  updateCartQuantityDisplay();
  
  // Dispatch event to notify other pages
  window.dispatchEvent(new Event('cartUpdated'));
}

function removeFromCart(productId) {
  bCart = bCart.filter(item => item.productId !== productId);
  saveToStorage();
  updateCartQuantityDisplay();
  window.dispatchEvent(new Event('cartUpdated'));
}

function updateCartQuantityDisplay() {
  const quantity = bCart.reduce((total, item) => total + item.quantity, 0);
  const quantityElements = document.querySelectorAll('.js-cart-quantity');
  quantityElements.forEach(element => {
    element.textContent = quantity;
  });
}

// Initialize on page load
updateCartQuantityDisplay();