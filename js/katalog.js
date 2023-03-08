// Katalog

const catalog__bottom = document.querySelector(".catalog__bottom");

const catalog__bottomCards = [
  {
    image: "./images/katalog1.png",
    title: "Хлеб",
  },
  {
    image: "./images/katalog2.png",
    title: "Фрукты и овощи",
  },
  {
    image: "./images/katalog3.png",
    title: "Молоко, сыр, яйцо",
  },
  {
    image: "./images/katalog4.png",
    title: "Напитки",
  },
  {
    image: "./images/katalog5.png",
    title: "Кондитерские изделия",
  },
  {
    image: "./images/katalog6.png",
    title: "Чай, кофе",
  },
  {
    image: "./images/katalog7.png",
    title: "Бакалея",
  },
  {
    image: "./images/katalog8.png",
    title: "Здоровое питание",
  },
  {
    image: "./images/katalog9.png",
    title: "Детское питание",
  },
  {
    image: "./images/katalog10.png",
    title: "Непродовольственные товары",
  },
  {
    image: "./images/katalog1.png",
    title: "Non",
  },
  {
    image: "./images/katalog2.png",
    title: "Фрукты и овощи",
  },
  {
    image: "./images/katalog3.png",
    title: "Замороженные продукты",
  },
  {
    image: "./images/katalog4.png",
    title: "Напитки",
  },
  {
    image: "./images/katalog5.png",
    title: "Кондитерские изделия",
  },
  {
    image: "./images/katalog6.png",
    title: "Чай, кофе",
  },
];

function getcatalog__bottomCard(image, title) {
  // img
  const catalog__bottom_body = document.createElement("div");
  catalog__bottom_body.className = "catalog__bottom_body";
  const catalog__bottom_img = document.createElement("img");
  catalog__bottom_img.src = image;
  catalog__bottom_body.append(catalog__bottom_img);

  // title
  const catalog__bottom_title = document.createElement("div");
  catalog__bottom_title.className = "catalog__bottom-title";
  const catalog__bottom_title_p = document.createElement("p");
  catalog__bottom_title_p.innerHTML = title;
  catalog__bottom_title.append(catalog__bottom_title_p);

  const catalog__bottom_card = document.createElement("div");
  catalog__bottom_card.setAttribute("class", "catalog__bottom_card");
  catalog__bottom_card.append(catalog__bottom_body, catalog__bottom_title);
  return catalog__bottom_card;
}

for (el of catalog__bottomCards) {
  catalog__bottom.append(getcatalog__bottomCard(el.image, el.title));
}

// const search = document.getElementById("search__input");

// function getCatalog(catalog__bottomCards) {
//   catalog__bottom = "";
//   for (el of catalog__bottomCards) {
//     catalog__bottom.innerHTML += getcatalog__bottomCard(el.image, el.title);
//   }
// }

// getCatalog(catalog__bottomCards);

// search.addEventListener("input", function () {
//   let res = [];
//   for (el of catalog__bottomCards) {
//     if (el.title.includes(this.value)) {
//       res.push(el);
//     }
//   }
//   getCatalog(res);
// });
// console.log(catalog__bottomCards);
