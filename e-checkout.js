// e-checkout.js
document.addEventListener('DOMContentLoaded', () => {
  // Load products from localStorage or fallback to e-prod.js array
  let products = [];
  try {
    products = JSON.parse(localStorage.getItem('prod')) || [];
    console.log('Products loaded from localStorage:', products);
    
    // If no products in localStorage, use the prod array directly
    if (products.length === 0 && typeof prod !== 'undefined') {
      products = prod;
      console.log('Using prod array directly:', products);
    }
  } catch (error) {
    console.error('Error loading products:', error);
    if (typeof prod !== 'undefined') {
      products = prod;
      console.log('Fallback to prod array:', products);
    }
  }

  

  // Load cart
  let eCart = JSON.parse(localStorage.getItem('eCart')) || [];
  console.log('Cart loaded:', eCart);

  // Get DOM elements
  const cartContainer = document.getElementById('cart-items');
  if (!cartContainer) {
    console.error('Cart container element not found!');
    return;
  }

  // Helper function to format price
  function formatPrice(cents) {
    return `$${(cents / 100).toFixed(2)}`;
  }

  // Function to render the cart
  function renderCart() {
    console.log('Rendering cart with products:', products);
    cartContainer.innerHTML = '';
    let totalItems = 0;
    let subtotal = 0;

    if (eCart.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
      updateSummary(0, 0);
      return;
    }

    

    eCart.forEach(item => {
      const product = products.find(p => p.id === item.productId);
      console.log(`Looking for product ${item.productId}:`, product);
      
      if (!product) {
        console.warn(`Product not found: ${item.productId}`);
        return;
      }

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
          <div>Price: ${formatPrice(product.priceCents)}</div>
          <div>Total: ${formatPrice(itemTotal)}</div>
        </div>
        <button class="remove-btn" data-product-id="${product.id}">Remove</button>
      `;
      cartContainer.appendChild(itemElement);
    });

    updateSummary(totalItems, subtotal);
  }

  function updateSummary(items, total) {
    document.getElementById('summary-items').textContent = items;
    document.getElementById('summary-subtotal').textContent = formatPrice(total);
    document.getElementById('summary-total').textContent = formatPrice(total);
  }

  // Initialize
  renderCart();

  // Listen for cart updates
  window.addEventListener('storage', () => {
    eCart = JSON.parse(localStorage.getItem('eCart')) || [];
    renderCart();
  });
});

