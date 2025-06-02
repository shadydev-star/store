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


    // Add Order Date, Delivery Date, and Place Order Button
  const currentDate = new Date().toISOString().split('T')[0];
  const deliveryDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  localStorage.setItem('orderDate', new Date().toISOString());


    const itemTotal = product.priceCents * item.quantity;
    subtotal += itemTotal;
    totalItems += item.quantity;

    
  

    const itemElement = document.createElement('div');
    itemElement.className = 'grid-sec';
    itemElement.innerHTML = `
      <div id="cart-section">
      <div class="order-con">
        <div class="img-con">
          <img class="order-img" src="${product.image}"  alt="${product.name} ">
        </div> 
      </div>

      
      <div class="track-con">
         <div class="tracking-con">
          <div>
            <label>
             <p class="deliv-date" >
                Order-date:
                
              </p>
              <input type="radio" name="order-date"
              id="option" checked>
               <p class="date" >
                ${currentDate}
              </p>
            </label>
          </div>
          <div>
            <label>
              <p class="deliv-date" >
                Delivery-date:
              </p>
              
              <input type="radio" id="option" name="delivery-date" checked>
              <p class="date" >
                ${deliveryDate}
              </p>
            </label>
          </div>
            </div>
          </div>


          <div class="track-btn-con">
             <a href="tracking.html">
            <button class="track-btn">
            track package
          </button>
              </a>
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