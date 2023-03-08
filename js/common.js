const cart_link = document.querySelector(".cart");  

const catr_local = localStorage.getItem("cart");
const cart_parse = JSON.parse(catr_local);
let cart = cart_parse || [];

function getCart() {
  let cart_local = localStorage.getItem("cart");
  let cart_parse = JSON.parse(cart_local);
  cart_link.innerHTML = cart_parse?.length ?? 0;
}
getCart();
