const btn = document.querySelector("button");

function rollDice() {
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);

    var ranimg1 = "images/dice" + randomNumber1 + ".png";
    var ranimg2 = "images/dice" + randomNumber2 + ".png";

    var img1 = document.querySelectorAll("img")[0];
    var img2 = document.querySelectorAll("img")[1];

    img1.setAttribute("src", ranimg1);
    img2.setAttribute("src", ranimg2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } 
    else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw";
    } 
    else {
        document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
    }
}

// Select images
var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

//  Mobile logic
if (window.innerWidth < 1081) {
    // Always default dice
    img1.setAttribute("src", "images/dice6.png");
    img2.setAttribute("src", "images/dice6.png");

    btn.addEventListener("click", rollDice);
}

//  Desktop logic
else {
    if (!localStorage.getItem("visited")) {
        // First time
        img1.setAttribute("src", "images/dice6.png");
        img2.setAttribute("src", "images/dice6.png");

        localStorage.setItem("visited", "true");
    } else {
        // After refresh
        rollDice();
    }
}
