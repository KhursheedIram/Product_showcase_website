let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';

  cart.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price}</td>
      <td>${item.quantity}</td>
      <td>$${item.price * item.quantity}</td>
    `;
    cartItems.appendChild(row);
  });
}

function checkout() {
  alert('Thank you for your purchase!');
  localStorage.removeItem('cart');
  window.location.href = 'index.html';
}

displayCart();