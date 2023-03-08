let productsCon = document.querySelector(".products");
const search = document.querySelector(".search");

function getCard(image, price, discount, description, rating, id) {
  return `<div class="col-lg-3 col-md-4 col-sm-6">
  <div class="card">
      <img src="${image}" class="card-img-top w-100" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${price} ₽</h5><span class="badge text-bg-danger">-${discount}%</span>
        <p> ${description}
        </p>
        <div class="reyting">
    

         <h6>Reyting: ${rating}</h6>
        </div>
        
        <a href="#" class="btn " onclick = "addProductToCard(${id})">
          В корзину

        </a>
      </div>
      </div>
    </div>`;
}

function getProducts(products) {
  productsCon.innerHTML = "";
  for (el of products) {
    productsCon.innerHTML += getCard(
      el.image,
      el.price,
      el.discount,
      el.description,
      el.rating,
      el.id
    );
  }
}
getProducts(products);

search.addEventListener("input", function () {
  let res = [];
  for (el of products) {
    let title = el.description.toLowerCase();
    let search = this.value.toLowerCase().trim();
    if (title.includes(search)) {
      res.push(el);
    }
  }
  getProducts(res);
});

function addProductToCard(id) {
  let product = products.find((product) => product.id === id);
  if (cart.find((el) => el.id == id)) {
    cart = cart.map((el) => {
      if (el.id == id) {
        el.quantity++;
      }
      return el;
    });
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  getCart();
}
