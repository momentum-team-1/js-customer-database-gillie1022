// set card target
let board = document.querySelector(".surface");

let curtis = customers[0]
console.log(curtis)
// created card div
    let card = document.createElement("div")
    card.classList.add("card")
    board.appendChild(card)


    let picDiv = document.createElement("div");
    picDiv.classList.add("picDiv")
    picDiv.innerHTML = `<img src=${curtis.picture.large}>`

    card.appendChild(picDiv)



function createImageElement(url){
    return `<img src=${url}>`
}
// create pic div
// let pic = document.createElement
