// allow users to determine size of card

let submitForm = document.getElementById("myForm");
submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let setHeigth = document.getElementById("heigth").value;
    let setWidth = document.getElementById("width").value;
    console.log(setWidth, setHeigth);
    let card = document.getElementById("card");
    card.style.width = setHeigth + "px";
    card.style.height = setHeigth + "px";
})

function changeCard(){
    let heart = `<h2>♥️</h2>`;
    let spade = `<h2>♠️</h2>`;
    let diamond = `<h2>♣️</h2>`;
    let club = `<h2>♦️</h2>`;
    let figures = [heart, spade, diamond, club];
    let numValues = [1,2,3,4,5,6,7,8,9,10,"J","K","Q","A"];
    let figPosition = Math.floor(Math.random()*4);
    let fig = figures[figPosition];
    let numPosition = Math.floor(Math.random()*14);
    let num = numValues[numPosition];
    console.log(fig);
    console.log(num);
    let figUpper = document.getElementById("figUp");
    figUpper.innerHTML = fig;
    let figLower = document.getElementById("figLow");
    figLower.innerHTML = fig;
    let cardValue = document.getElementById("num");
    cardValue.innerHTML = num;
    alert("New card generated!");
}

function delayChange(){
    setTimeout(changeCard,3000);
}

window.addEventListener("load", changeCard);
let btn = document.getElementById("myButton");
btn.addEventListener("click", delayChange);

    
