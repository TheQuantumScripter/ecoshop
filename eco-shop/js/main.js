function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Product added to cart!");
}
function login(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  sessionStorage.setItem('user', email.split('@')[0]);
  alert("Login successful!");
  window.location.href = "index.html";
}
function logout() {
  sessionStorage.removeItem('user');
  alert("Logout successful!");
  window.location.href = "index.html";
}

const products = {
  "eco-notebook": { name: "Eco Notebook", carbon: 1.2 },
  "recycled-bottle": { name: "Recycled Water Bottle", carbon: 2.0 },
  "bamboo-tooth": { name: "Bamboo Toothbrush", carbon: 0.5 },
  "solar-light": { name: "Solar Garden Light", carbon: 3.1 },
  "cotton-bag": { name: "Organic Cotton Bag", carbon: 0.9 },
  "eco-pen": { name: "Recycled Pen Pack", carbon: 0.4 },
  "eco-cup": { name: "Reusable Coffee Cup", carbon: 1.1 },
  "plant-kit": { name: "Indoor Plant Kit", carbon: 0.7 }
};

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Product added to cart!");
}
