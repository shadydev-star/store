document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('.js-main');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const orderDate = new Date(localStorage.getItem('orderDate')) || new Date();
  const deliveryDate = new Date(orderDate.getTime() + 7 * 86400000);
  const today = new Date();


  

  main.innerHTML = '';

  if (!cart.length) {
    main.innerHTML = '<p>No products to track.</p>';
    return;
  }


  
   


  // Calculate days passed and remaining
  const daysPassed = Math.floor((today - orderDate) / (1000 * 60 * 60 * 24));
  const daysRemaining = Math.max(0, 7 - daysPassed);

  // Determine shipping status
  let status = 'Preparing';
  if (daysPassed >= 6) status = 'Delivered';
  else if (daysPassed >= 3) status = 'Shipped';

  const progressPercent = Math.min((daysPassed / 7) * 100, 100);


  

  cart.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return;

    const progressLabels = `
      <div class="progress-labels-container">
        <div class="progress-label ${status === 'Preparing' ? 'current-status' : ''}">Preparing</div>
        <div class="progress-label ${status === 'Shipped' ? 'current-status' : ''}">Shipped</div>
        <div class="progress-label ${status === 'Delivered' ? 'current-status' : ''}">Delivered</div>
      </div>
    `;

    const productHTML = `
      <div class="prod-con">
        <div class="delivery-date">Arriving on ${deliveryDate.toDateString()}</div>
        <div class="prod-name">${product.name}</div>
        <div class="prod-quantity">Quantity: ${item.quantity}</div>
        <div class="prod-img-con">
          <img class="prod-img" src="${product.image}" alt="${product.name}">
        </div>
        ${progressLabels}
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${progressPercent}%;"></div>
        </div>
        <p class="delivery-eta">
        ${daysRemaining === 0
          ? '<strong>Arriving today</strong>'
          : `Estimated delivery in <strong>${daysRemaining} day(s)</strong>`}
        </p>

      </div>
    `;

    main.insertAdjacentHTML('beforeend', productHTML);
  });





});
