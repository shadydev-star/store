// checkout.js

document.addEventListener('DOMContentLoaded', () => {
  // Load cart - initialize as empty array if null
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Get DOM elements
  const cartContainer = document.getElementById('cart-items');
  const summaryItems = document.getElementById('summary-items');
  const summarySubtotal = document.getElementById('summary-subtotal');
  const summaryTotal = document.getElementById('summary-total');

  // Helper function to format price
  function formatPrice(cents) {
    return `$${(cents / 100).toFixed(2)}`;
  }

  // Function to remove item from cart
  function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(); // Re-render the cart after removal
    updateCartQuantity(); // Update the cart quantity display
  }

  // Function to update cart quantity in header
  function updateCartQuantity() {
    const quantity = cart.reduce((total, item) => total + item.quantity, 0);
    const quantityElements = document.querySelectorAll('.js-cart-quantity');
    quantityElements.forEach(element => {
      element.textContent = quantity;
    });
  }

  // Main function to render the cart
  function renderCart() {
    cartContainer.innerHTML = '';
    let totalItems = 0;
    let subtotal = 0;

    if (cart.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
      summaryItems.textContent = '0';
      summarySubtotal.textContent = '$0.00';
      summaryTotal.textContent = '$0.00';
      return;
    }

    cart.forEach(item => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return;

      const itemTotal = product.priceCents * item.quantity;
      subtotal += itemTotal;
      totalItems += item.quantity;

      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="cart-item-image">
        <div class="cart-item-details">
          <h3>${product.name}</h3>
          <div>Quantity: ${item.quantity}</div>
          <div>Price: ${formatPrice(product.priceCents)} each</div>
          <div>Total: ${formatPrice(itemTotal)}</div>
        </div>
        <button class="remove-btn" data-product-id="${product.id}">Remove</button>
      `;
      cartContainer.appendChild(itemElement);
    });

    // Update summary
    summaryItems.textContent = totalItems;
    summarySubtotal.textContent = formatPrice(subtotal);
    summaryTotal.textContent = formatPrice(subtotal);

    // Add event listeners to all remove buttons
    document.querySelectorAll('.remove-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const productId = e.target.dataset.productId;
        removeFromCart(productId);
      });
    });
  }

  // Initialize the page
  renderCart();
  updateCartQuantity();

  // Listen for cart updates from other tabs
  window.addEventListener('storage', () => {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    renderCart();
    updateCartQuantity();
  });
});


