// // Aksiya
// const aksiya = document.querySelector(".aksiya");

// const aksiyaCards = [
//   {
//     image: "./images/aksiya.png",
//     title: "Г/Ц Блинчики с мясом вес, Россия",
//   },
//   {
//     image: "./images/aksiya2.png",
//     title: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное...",
//   },
//   {
//     image: "./images/aksiya3.png",
//     title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
//   },
//   {
//     image: "./images/aksiya4.png",
//     title: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
//   },
// ];

// function getaksiyaCard(image, title) {
//   // img
//   const aksiya_body = document.createElement("div");
//   aksiya_body.className = "aksiya_body";
//   const aksiya_img = document.createElement("img");
//   aksiya_img.src = image;
//   aksiya_body.append(aksiya_img);

//   // h5 h6
//   const aksiya_number = document.createElement("div");
//   aksiya_number.className = "aksiya_number-top";
//   const aksiya_h5 = document.createElement("h5");
//   aksiya_h5.innerHTML = "44,50 P";
//   const aksiya_h6 = document.createElement("h6");
//   aksiya_h6.innerHTML = "50,50 P";
//   aksiya_number.append(aksiya_h5, aksiya_h6);

//   // subtitle
//   const aksiya_subtitle = document.createElement("div");
//   aksiya_subtitle.className = "aksiya_subtitle-bottom";
//   const aksiya_subtitle_span = document.createElement("span");
//   aksiya_subtitle_span.innerHTML = "С картой";
//   const aksiya_subtitle_span1 = document.createElement("span");
//   aksiya_subtitle_span1.innerHTML = "Обычная";
//   aksiya_subtitle.append(aksiya_subtitle_span, aksiya_subtitle_span1);

//   // title
//   const aksiya_title = document.createElement("div");
//   aksiya_title.className = "aksiya-title";
//   const aksiya_title_p = document.createElement("p");
//   aksiya_title_p.innerHTML = title;
//   aksiya_title.append(aksiya_title_p);

//   // star
//   const aksiya_star = document.createElement("div");
//   aksiya_star.className = "aksiya-star";
//   const aksiya_star_img = document.createElement("img");
//   aksiya_star_img.src = "./images/star2.svg";
//   const aksiya_star_img2 = document.createElement("img");
//   aksiya_star_img2.src = "./images/star2.svg";
//   const aksiya_star_img3 = document.createElement("img");
//   aksiya_star_img3.src = "./images/star3.svg";
//   const aksiya_star_img4 = document.createElement("img");
//   aksiya_star_img4.src = "./images/star4.svg";
//   const aksiya_star_img5 = document.createElement("img");
//   aksiya_star_img5.src = "./images/star5.svg";
//   aksiya_star.append(
//     aksiya_star_img,
//     aksiya_star_img2,
//     aksiya_star_img3,
//     aksiya_star_img4,
//     aksiya_star_img5
//   );

//   // button
//   const aksiya_button = document.createElement("div");
//   aksiya_button.className = "aksiya_btn";
//   const aksiya_button_btn = document.createElement("button");
//   aksiya_button_btn.innerHTML = "В корзину";
//   aksiya_button.append(aksiya_button_btn);

//   const aksiya_card = document.createElement("div");
//   aksiya_card.setAttribute("class", "aksiya_card");
//   aksiya_card.append(
//     aksiya_body,
//     aksiya_number,
//     aksiya_subtitle,
//     aksiya_title,
//     aksiya_star,
//     aksiya_button
//   );
//   return aksiya_card;
// }

// for (el of aksiyaCards) {
//   aksiya.append(getaksiyaCard(el.image, el.title));
// }

// Novinki
const novinki = document.querySelector(".novinki");

const novinkiCards = [
  {
    image: "./images/novinki.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "599,99 P",
  },
  {
    image: "./images/aksiya3.png",
    title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: "44,50 P",
  },
  {
    image: "./images/aksiya4.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "599,99 P",
  },
  {
    image: "./images/aksiya2.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "49,39 P",
  },
];

function getnovinkiCard(image, title, price) {
  // img
  const novinki_body = document.createElement("div");
  novinki_body.className = "novinki_body";
  const novinki_img = document.createElement("img");
  novinki_img.src = image;
  novinki_body.append(novinki_img);

  // h5
  const novinki_number = document.createElement("div");
  novinki_number.className = "novinki_number-top";
  const novinki_h5 = document.createElement("h5");
  novinki_h5.innerHTML = price;
  novinki_number.append(novinki_h5);

  // title
  const novinki_title = document.createElement("div");
  novinki_title.className = "novinki-title";
  const novinki_title_p = document.createElement("p");
  novinki_title_p.innerHTML = title;
  novinki_title.append(novinki_title_p);

  // star
  const novinki_star = document.createElement("div");
  novinki_star.className = "novinki-star";
  const novinki_star_img = document.createElement("img");
  novinki_star_img.src = "./images/star2.svg";
  const novinki_star_img2 = document.createElement("img");
  novinki_star_img2.src = "./images/star2.svg";
  const novinki_star_img3 = document.createElement("img");
  novinki_star_img3.src = "./images/star3.svg";
  const novinki_star_img4 = document.createElement("img");
  novinki_star_img4.src = "./images/star5.svg";
  const novinki_star_img5 = document.createElement("img");
  novinki_star_img5.src = "./images/star5.svg";
  novinki_star.append(
    novinki_star_img,
    novinki_star_img2,
    novinki_star_img3,
    novinki_star_img4,
    novinki_star_img5
  );

  // button
  const novinki_button = document.createElement("div");
  novinki_button.className = "novinki_btn";
  const novinki_button_btn = document.createElement("button");
  novinki_button_btn.innerHTML = "В корзину";
  novinki_button.append(novinki_button_btn);

  const novinki_card = document.createElement("div");
  novinki_card.setAttribute("class", "novinki_card");
  novinki_card.append(
    novinki_body,
    novinki_number,
    novinki_title,
    novinki_star,
    novinki_button
  );
  return novinki_card;
}

for (el of novinkiCards) {
  novinki.append(getnovinkiCard(el.image, el.title, el.price));
}

// Pokupki
const pokupki = document.querySelector(".pokupki");

const pokupkiCards = [
  {
    image: "./images/pokupki2.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "77,99 P",
  },
  {
    image: "./images/aksiya4.png",
    title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: "159,99 P",
  },
  {
    image: "./images/novinki.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "599,99 P",
  },
  {
    image: "./images/aksiya2.png",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "49,39 P",
  },
];

function getpokupkiCard(image, title, price) {
  // img
  const pokupki_body = document.createElement("div");
  pokupki_body.className = "pokupki_body";
  const pokupki_img = document.createElement("img");
  pokupki_img.src = image;
  pokupki_body.append(pokupki_img);

  // h5
  const pokupki_number = document.createElement("div");
  pokupki_number.className = "pokupki_number-top";
  const pokupki_h5 = document.createElement("h5");
  pokupki_h5.innerHTML = price;
  pokupki_number.append(pokupki_h5);

  // title
  const pokupki_title = document.createElement("div");
  pokupki_title.className = "pokupki-title";
  const pokupki_title_p = document.createElement("p");
  pokupki_title_p.innerHTML = title;
  pokupki_title.append(pokupki_title_p);

  // star
  const pokupki_star = document.createElement("div");
  pokupki_star.className = "pokupki-star";
  const pokupki_star_img = document.createElement("img");
  pokupki_star_img.src = "./images/star2.svg";
  const pokupki_star_img2 = document.createElement("img");
  pokupki_star_img2.src = "./images/star2.svg";
  const pokupki_star_img3 = document.createElement("img");
  pokupki_star_img3.src = "./images/star3.svg";
  const pokupki_star_img4 = document.createElement("img");
  pokupki_star_img4.src = "./images/star5.svg";
  const pokupki_star_img5 = document.createElement("img");
  pokupki_star_img5.src = "./images/star5.svg";
  pokupki_star.append(
    pokupki_star_img,
    pokupki_star_img2,
    pokupki_star_img3,
    pokupki_star_img4,
    pokupki_star_img5
  );

  // button
  const pokupki_button = document.createElement("div");
  pokupki_button.className = "pokupki_btn";
  const pokupki_button_btn = document.createElement("button");
  pokupki_button_btn.innerHTML = "В корзину";
  pokupki_button.append(pokupki_button_btn);

  const pokupki_card = document.createElement("div");
  pokupki_card.setAttribute("class", "pokupki_card");
  pokupki_card.append(
    pokupki_body,
    pokupki_number,
    pokupki_title,
    pokupki_star,
    pokupki_button
  );
  return pokupki_card;
}

for (el of pokupkiCards) {
  pokupki.append(getpokupkiCard(el.image, el.title, el.price));
}

// Offers
const offers = document.querySelector(".offers");

const offersCards = [
  {
    image: "./images/offers1.png",
    title: "Оформите карту «Северяночка»",
    subtitle: "И получайте бонусы при покупке в магазинах и на сайте",
  },
  {
    image: "./images/offers2.png",
    title: "Покупайте акционные товары",
    subtitle: "И получайте вдвое больше бонусов",
  },
];

function getoffersCard(image, title, subtitle) {
  // title
  const offers_number = document.createElement("div");
  offers_number.className = "offers_number-top";
  const offers_h2 = document.createElement("p");
  const offers_title_p = document.createElement("h2");
  offers_title_p.innerHTML = title;
  offers_h2.innerHTML = subtitle;
  offers_number.append(offers_title_p);
  offers_number.append(offers_h2);

  // img
  const offers_body = document.createElement("div");
  offers_body.className = "offers_body";
  const offers_img = document.createElement("img");
  offers_img.src = image;
  offers_body.append(offers_img);

  const offers_card = document.createElement("div");
  offers_card.setAttribute("class", "offers_card");
  offers_card.append(offers_number, offers_body);
  return offers_card;
}

for (el of offersCards) {
  offers.append(getoffersCard(el.image, el.title, el.subtitle));
}

// Articles
const articles = document.querySelector(".articles");

const articlesCards = [
  {
    image: "./images/articles1.png",
    date: "05.03.2021",
    title:
      "Подробная информация о режимах использования масок и перчаток на территории магазинов `ЛЕНТА`. Информация обновляется каждый будний день.",
    price: "Режим использования масок и перчаток на территории магазинов",
  },
  {
    image: "./images/articles2.png",
    date: "05.03.2021",
    title:
      "8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.",
    price: "Весеннее настроение для каждой масок и перчаток",
  },
  {
    image: "./images/articles3.png",
    date: "22.02.2020",
    title:
      "Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!",
    price: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
  },
];

function getarticlesCard(image, title, price, date) {
  // img
  const articles_body = document.createElement("div");
  articles_body.className = "articles_body";
  const articles_img = document.createElement("img");
  articles_img.src = image;
  articles_img.setAttribute = ("width", "100%");
  articles_body.append(articles_img);

  // date
  const articles_sana = document.createElement("div");
  articles_sana.className = "articles-sana";
  const articles_sana_span = document.createElement("span");
  articles_sana_span.innerHTML = date;
  articles_sana.append(articles_sana_span);

  // h5
  const articles_number = document.createElement("div");
  articles_number.className = "articles_number-top";
  const articles_h2 = document.createElement("h2");
  articles_h2.innerHTML = price;
  articles_number.append(articles_h2);

  // title
  const articles_title = document.createElement("div");
  articles_title.className = "articles-title";
  const articles_title_p = document.createElement("p");
  articles_title_p.innerHTML = title;
  articles_title.append(articles_title_p);

  // button
  const articles_button = document.createElement("div");
  articles_button.className = "articles_btn";
  const articles_button_btn = document.createElement("button");
  articles_button_btn.innerHTML = "Подробнее";
  articles_button.append(articles_button_btn);

  const articles_card = document.createElement("div");
  articles_card.setAttribute("class", "articles_card");
  articles_card.append(
    articles_body,
    articles_sana,
    articles_number,
    articles_title,
    articles_button
  );
  return articles_card;
}

for (el of articlesCards) {
  articles.append(getarticlesCard(el.image, el.title, el.price, el.date));
}
