const cart_row = document.querySelector(".cart-row");

function getCartProduct({
  name,
  category,
  description,
  price,
  rating,
  image,
  discount,
  id,
  quantity,
}) {
  return `
    <div class="col-12 mt-3">
      <div class="card">
        <div class="row">
          <div class="col-md-4">
            <img
              src="${image}"
              height="200px"
              class="card-img-top w-100"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div
                class="d-flex justify-content-between align-items-center card_body"
              >
                <h5 class="card-title">${name}</h5>
                <span class="badge  ">${category}</span>
              </div>

              <div class="d-flex justify-content-between">
                <p class="card-text price">
                  ${price}₽
                  <span class="badge text-bg-danger"
                    >-${discount} %</span
                  >
                </p>
                <p class="card-text">${rating}</p>
              </div>
              <p class="card-text text_des">${description}</p>
              <button class="btn btn-primary" onclick="changeQuantity('-', ${id})">-</button>
              <span class="str">${quantity}</span>
              <button class="btn btn-primary" onclick="changeQuantity('+', ${id})">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

cart.forEach((el) => {
  cart_row.innerHTML += getCartProduct(el);
});

function changeQuantity(status, id) {
  let product = cart.find((el) => el.id == id);
  if (status == "-") {
    if (product.quantity == 1) {
      cart = cart.filter((el) => el.id != id);
    }
  }
  cart = cart.map((el) => {
    if (el.id == id) {
      status == "+" ? el.quantity++ : el.quantity--;
    }
    return el;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.reload();
}
