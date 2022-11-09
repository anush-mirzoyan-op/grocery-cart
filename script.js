import { data } from "./data.js";

let cartBalance = document.getElementById("cartBalance");
let balanceButton = document.getElementById("openDropdown");


balanceButton.addEventListener("click", () => createDropdown());

window.createCard = ({ imageLink, candyName: name, price }) => {
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
  shoppingIcon.addEventListener("click", () => addToCartandDropdown(price ,imageLink)); //ֆունկցիային տալիս ենք նաև նկարի լինքը որ միանգամից դռոփդաունի մեջ նկարի

  let priceContainer = document.createElement("div");
  priceContainer.classList.add("sweet-item-price");
  card.appendChild(priceContainer);

  let candyName = document.createElement("h5");
  candyName.innerHTML = name;
  priceContainer.appendChild(candyName);

  let candyPrice = document.createElement("strong");
  candyPrice.innerHTML = "$" + price;
  priceContainer.appendChild(candyPrice);
  document.querySelector("#grid-container").appendChild(card);
};

window.renderStoreData = (type) => {
  document.querySelector("#grid-container").innerHTML = "";
  data.map((item) => {
    if (type == "All" || item.type == type) {
      createCard(item);
      console.log("create card");
    }
  });
};

const dropDown = document.createElement('div')
dropDown.classList.add(".dropdown-content");

document.querySelector("#openDropdown").appendChild(dropDown);


window.addToCartandDropdown = (val , imagelink) => {
  console.log(cartBalance.innerHTML);
  console.log(val);
  console.log(imagelink);

  const dropdownItems = document.createElement('div')
  dropdownItems.innerHTML = `<img src = ${imagelink}>`
  dropdownItems.classList.add("dropdownItem")
  dropDown.appendChild(dropdownItems)
  cartBalance.innerHTML = (+cartBalance.innerHTML + val).toFixed(2);
};


//սարքում ենք սկզբի համար էդ Dropdown-ը ու կպցնում ենք nav-bar-ին
window.createDropdown = () => {
  console.log("created")
};