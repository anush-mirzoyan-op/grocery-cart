import { data } from "./data.js";

let cartBalance = document.getElementById("cartBalance");
let balanceButton = document.getElementById("openDropdown");
let state = false;
const dropDown = document.createElement("div");

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
  shoppingIcon.addEventListener("click", () =>
    addToCartandDropdown(price, imageLink)
  ); //ֆունկցիային տալիս ենք նաև նկարի լինքը որ միանգամից դռոփդաունի մեջ նկարի

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

const totalPrice = document.createElement("div");
totalPrice.classList.add("total-price");

window.addToCartandDropdown = (val, imagelink) => {
  const dropdownItems = document.createElement("div");
  let cartBalanceValue = (+cartBalance.innerHTML + val).toFixed(2);
  cartBalance.innerHTML = cartBalanceValue;

  const imageDiv = document.createElement("div");
  imageDiv.innerHTML = `<img src = ${imagelink}>`;

  const priceDiv = document.createElement("div");
  priceDiv.innerHTML = `Cart item $ ${val}`;

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas", "fa-trash", "delete-icon");

  dropdownItems.appendChild(imageDiv);
  dropdownItems.appendChild(priceDiv);
  dropdownItems.appendChild(deleteIcon);
  deleteIcon.addEventListener("click", () => {
    dropdownItems.remove(dropdownItems);
    cartBalance.innerHTML = (cartBalanceValue - val).toFixed(2);
    totalPrice.innerText = "Total $ " + cartBalance.innerHTML;

  });

  totalPrice.innerText = "";

  totalPrice.innerHTML += "Total" + "$" + cartBalance.innerHTML;

  // add items at the begining of the list
  // insertBefore --- prepend

  dropdownItems.classList.add("dropdownItem");
  dropDown.prepend(dropdownItems);
  dropDown.appendChild(totalPrice);
};

//սարքում ենք սկզբի համար էդ Dropdown-ը ու կպցնում ենք nav-bar-ին
window.createDropdown = () => {
  console.log("created");

  dropDown.classList.add("dropdown-content");

  document.querySelector("#nav-bar").appendChild(dropDown);
};

window.addEventListener("load", createDropdown);

balanceButton.addEventListener("click", () => {
  if (!state) {
    dropDown.style.display = "grid";
  } else {
    dropDown.style.display = "none";
  }
  state = !state;
});
