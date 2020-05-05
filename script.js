// set card target
let board = document.querySelector(".board");

for (let customer of customers) {
  // created card div
  let card = document.createElement("div");
  card.classList.add("card");
  board.appendChild(card);
  // create pic div
  // add pic to div
  // add pic div to card
  let picDiv = document.createElement("div");
  picDiv.classList.add("picDiv");
  picDiv.innerHTML = `<img src=${customer.picture.large}>`;
  card.appendChild(picDiv);
  // create name div
  // create h2 tag for name
  // add name div to card
  let nameDiv = document.createElement("div");
  nameDiv.classList.add("nameDiv");
  nameDiv.innerHTML = `<h2>${
    customer.name.first.charAt(0).toUpperCase() +
    customer.name.first.slice(1) +
    " " +
    customer.name.last.charAt(0).toUpperCase() +
    customer.name.last.slice(1)
  }</h2>`;
  card.appendChild(nameDiv);
// create email div
// add p tag to div
// add email div to card
  let emailDiv = document.createElement("div");
  emailDiv.classList.add("emailDiv");
  emailDiv.innerHTML = `<p>${customer.email}</p>`;
  card.appendChild(emailDiv);




}
function getName() {
  return;
}

function createImageElement(url) {
  return `<img src=${url}>`;
}
// create pic div
// let pic = document.createElement
