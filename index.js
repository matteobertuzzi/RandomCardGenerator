// allow users to determine size of card

let submitForm = document.getElementById("myForm");
submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let setHeigth = document.getElementById("heigth").value;
    let setWidth = document.getElementById("width").value;
    console.log(setWidth, setHeigth);
    let card = document.getElementById("card");
    let cardWidth = card.style.width = setWidth + "px";
    let cardHeight = card.style.height = setHeigth + "px";
    let numSize = document.getElementById("num").style.fontSize = setWidth/3 + "px";
    let uph2Size = document.getElementById("figUp").style.fontSize = setWidth/3 + "px";
    let lowh2Size = document.getElementById("figLow").style.fontSize = setWidth/3 + "px";
    console.log(numSize);
})

function pickItem(){
    let heart = "♥️";
    let spade = "♠️";
    let diamond = "♣️";
    let club = "♦️";
    let figures = [heart, spade, diamond, club];
    let numValues = [1,2,3,4,5,6,7,8,9,10,"J","K","Q","A"];
    let colors = ["red","black","blue","green"];
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
}
function changeCol(){
    let fig = document.getElementById("figUp");
    console.log(fig.innerHTML);
    if (fig.innerHTML === "♥️" || fig.innerHTML === "♦️"){
            let numCol = document.getElementById("num").style.color = "red";
            let uph2Col = document.getElementById("figUp").style.color = "red";
            let lowh2Col = document.getElementById("figLow").style.color = "red";
        }
    }

function changeCard(){
    pickItem();
    changeCol();
    alert("New card generated!");
}

function delayChange(){
    setTimeout(changeCard,3000);
}

window.addEventListener("load", changeCard);
let btn = document.getElementById("myButton");
btn.addEventListener("click", delayChange);

    
