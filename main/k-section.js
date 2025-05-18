let kprodshtml = '';

kprods.forEach((product) =>{

  kprodshtml +=`
  
       <div class="product-card">
      <div class="image-placeholder">
        <img class="image" src="${product.image}">
      </div>
      <h2 class="item-name limit-text-to-2-lines">${product.name}</h2>

      <div class="item-rating-container">
        <img class="item-rating-stars" src="ratings/rating-${product.rating.stars * 10}.png">
        <div class="item-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="price-input">
        <div class="item-quantity-container">
          <select class="quantity-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div class="price">
          $${(product.priceCents / 100).toFixed(2)}
        </div>
      </div>

      <div class="item-spacer"></div>
      
      <div class="added-to-cart">
        <img src="icons2/checkmark.png">
        Added
      </div>

      <button class="js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
    </div>
  `;
});

document.querySelector('.js-prod-grid').innerHTML = kprodshtml;

document.querySelectorAll('.js-add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    const productCard = button.closest('.product-card');
    const quantitySelect = productCard.querySelector('.quantity-select');
    const quantity = parseInt(quantitySelect.value);

    addToCart(productId, quantity);
    
    // Show "Added to cart" message
    const addedMessage = productCard.querySelector('.added-to-cart');
    addedMessage.style.opacity = '1';

    // Hide after 2 seconds
    setTimeout(() => {
      addedMessage.style.opacity = '0';
    }, 2000);
  });
});