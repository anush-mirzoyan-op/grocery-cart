import { data } from "./data";

console.log(data);

function createCard({ imageLink, candyName, cndyPrice: price }) {
  const card = document.createElement("div");
  card.classList.add("card");

  const hoveringImage = document.createElement("div");
  hoveringImage.classList.add("hovering-image");

  card.appendChild(hoveringImage);

  const image = document.createElement("img");
  image.src = `${imageLink}`;
  hoveringImage.appendChild(image);

  const shoppingIcon = document.createElement("i");
  shoppingIcon.classList.add("fas", "fa-shopping-cart", "card-shopping-icon");
  hoveringImage.appendChild(shoppingIcon);

  let priceContainer = document.createElement("div");
  priceContainer.classList.add("sweet-item-price");
  card.appendChild(priceContainer);

  let candyName = document.createElement("h5");
  candyName.innerHTML = candyName;
  priceContainer.appendChild(candyName);

  let candyPrice = document.createElement("strong");
  candyPrice.innerHTML = price;
  priceContainer.appendChild(candyPrice);
}

function renderStoreData(type) {
  //   if (type === "All") {
  //     data.map((item) => createCard(item));
  //   }

  data.map((item) => {
    if (type == "All" || item.type == type) {
      createCard(item)();
    }
  });
}
