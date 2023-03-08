const categories = document.querySelector(".categories");

const categoriesCard = [
  {
    image: "./images/img (17).png",
    subtitle: "139,99 ₽",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
  },
  {
    image: "./images/img (18).png",
    subtitle: "69,99 ₽",
    title: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное ...",
  },
  {
    image: "./images/img (19).png",
    subtitle: "77,99 ₽",
    title: "Молоко сгущенное РОГАЧЕВ Егорка, цельное с сахаром...",
  },
  {
    image: "./images/img (20).png",
    subtitle: "192,99 ₽",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
  },
  {
    image: "./images/img (21).png",
    subtitle: "29,99 ₽",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
  },
  {
    image: "./images/img (22).png",
    subtitle: "29,99 ₽",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
  },
];

function getcategoryCard(image, title, subtitle) {
  // img
  const category_body = document.createElement("div");
  category_body.className = "category_body";
  const category_img = document.createElement("img");
  category_img.src = image;
  category_body.append(category_img);

  // h5 h6
  const category_number = document.createElement("div");
  category_number.className = "category_number-top";
  const category_h5 = document.createElement("h5");
  category_h5.innerHTML = subtitle;
  category_number.append(category_h5);

  // title
  const category_title = document.createElement("div");
  category_title.className = "category-title";
  const category_title_p = document.createElement("p");
  category_title_p.innerHTML = title;
  category_title.append(category_title_p);

  // star
  const category_star = document.createElement("div");
  category_star.className = "category-star";
  const category_star_img = document.createElement("img");
  category_star_img.src = "./images/star2.svg";
  const category_star_img2 = document.createElement("img");
  category_star_img2.src = "./images/star2.svg";
  const category_star_img3 = document.createElement("img");
  category_star_img3.src = "./images/star.svg";
  const category_star_img4 = document.createElement("img");
  category_star_img4.src = "./images/star.svg";
  const category_star_img5 = document.createElement("img");
  category_star_img5.src = "./images/star.svg";
  category_star.append(
    category_star_img,
    category_star_img2,
    category_star_img3,
    category_star_img4,
    category_star_img5
  );

  // button
  const category_button = document.createElement("div");
  category_button.className = "category_btn";
  const category_button_btn = document.createElement("button");
  category_button_btn.innerHTML = "В корзину";
  category_button.append(category_button_btn);

  const category_card = document.createElement("div");
  category_card.setAttribute("class", "category_card");
  category_card.append(
    category_body,
    category_number,
    category_title,
    category_star,
    category_button
  );
  return category_card;
}

for (el of categoriesCard) {
  categories.append(getcategoryCard(el.image, el.title, el.subtitle));
}
