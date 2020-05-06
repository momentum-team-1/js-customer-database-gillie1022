// set card target
let board = document.querySelector(".board");

function titleCase(string) {
  let sentence = string.split(" ");
  for (let l = 0; l < sentence.length; l++) {
    sentence[l] = sentence[l][0].toUpperCase() + sentence[l].slice(1);
  }
  return sentence.join(" ");
}

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
    titleCase(customer.name.first) + " " + titleCase(customer.name.last)
  }</h2>`;
  card.appendChild(nameDiv);
  // create email div
  // add p tag to div
  // add email div to card
  let emailDiv = document.createElement("div");
  emailDiv.classList.add("emailDiv");
  emailDiv.innerHTML = `<p>${customer.email}</p>`;
  card.appendChild(emailDiv);
  // create street div
  // add p tag to street div
  // add street div to card
  let streetDiv = document.createElement("div");
  streetDiv.classList.add("streetDiv");
  streetDiv.innerHTML = `<p>${titleCase(customer.location.street)}</p>`;
  card.appendChild(streetDiv);
  //   create cityStateZip div
  // add city + state + zip to div
  // add div to card
  let cityStateZipDiv = document.createElement("div");
  cityStateZipDiv.classList.add("cityStateZipDiv");
  cityStateZipDiv.innerHTML = `<p>${
    titleCase(customer.location.city) +
    ", " +
    nameToAbbr(customer.location.state) +
    " " +
    customer.location.postcode
  }</p>`;
  card.appendChild(cityStateZipDiv);

  // add dob div
  // add dob to div
  // add div to card
  let dobDiv = document.createElement("div");
  dobDiv.classList.add("dobDiv");
  dobDiv.innerHTML = `<p>${"DOB: " + moment(customer.dob).format("MMM D, YYYY")}</p>`;
  card.appendChild(dobDiv);
  // add customerSince div
  let customerSinceDiv = document.createElement("div");
  customerSinceDiv.classList.add("customerSinceDiv");
  customerSinceDiv.innerHTML = `<p>${
    "Customer since: " + moment(customer.registered).format("MMM D, YYYY")
  }</p>`;
  card.appendChild(customerSinceDiv);
}
