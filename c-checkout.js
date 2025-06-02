// checkout.js
document.addEventListener('DOMContentLoaded', () => {
  // Load cart - initialize as empty array if null
  let cCart = JSON.parse(localStorage.getItem('cCart')) || [];

  // Load products from localStorage
  const products = JSON.parse(localStorage.getItem('cprods')) || [];

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
    cCart = cCart.filter(item => item.productId !== productId);
    localStorage.setItem('cCart', JSON.stringify(cCart));
    renderCart(); // Re-render the cart after removal
    updateCartQuantity(); // Update the cart quantity display
  }

  // Function to update cart quantity in header
  function updateCartQuantity() {
    const quantity = cCart.reduce((total, item) => total + item.quantity, 0);
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

    if (cCart.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
      summaryItems.textContent = '0';
      summarySubtotal.textContent = '$0.00';
      summaryTotal.textContent = '$0.00';
      return;
    }

    cCart.forEach(item => {
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
    cCart = JSON.parse(localStorage.getItem('cCart')) || [];
    renderCart();
    updateCartQuantity();
  });
});