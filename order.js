document.addEventListener('DOMContentLoaded', () => {
  // Load cart - initialize as empty array if null
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
  }



   const cartContainer = document.getElementById('grid-sec');


   function formatPrice(cents) {
    return `$${(cents / 100).toFixed(2)}`;
  }
  


  function updateCartQuantity() {
    const quantity = cart.reduce((total, item) => total + item.quantity, 0);
    const quantityElements = document.querySelectorAll('.js-cart-quantity');
    quantityElements.forEach(element => {
      element.textContent = quantity;
    });
  }




  function renderCart() {
    cartContainer.innerHTML = '';
    let totalItems = 0;
    let subtotal = 0;
    

    if (cart.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty!</p>';
      return;
    }

    cart.forEach(item => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return;


      const itemTotal = product.priceCents * item.quantity;
      subtotal += itemTotal;
      totalItems += item.quantity;
     

      const itemElement = document.createElement('div');
      itemElement.className = 'grid-sec';
      itemElement.innerHTML = `
         <div id="cart-section">
          <div class="order-con">
            <div class="img-con">
              <img class="order-img" src="${product.image} " alt="">
            </div> 
          </div>

          <div class="desc-con">
            <div class="descrip-con">
              <p class="descrip">${product.name} </p>
              
              <p class="descrip">${item.quantity} </p>

            </div>
          </div>
          
          <div class="track-con">
            <div class="tracking-con">
              <div class="track-pic">
                <img class="track-img" src="${product.image} " alt="">
              </div>
              <p class="tracking-id">${product.id} </p>

              <a href="tracking.html">
                <button class="track-btn">
                track package
              </button>
              </a>

            </div>
          </div>

          

        </div>
      `;
      cartContainer.appendChild(itemElement);
    });
  }



  renderCart();
  updateCartQuantity();


   window.addEventListener('storage', () => {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    renderCart();
    updateCartQuantity();
  });

});

