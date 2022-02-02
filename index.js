var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceImage1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",diceImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" ,diceImage2);

if (randomNumber1>randomNumber2){
  var heading1 = document.querySelector("h1");
  heading1.innerHTML = "Player 1 wins!🚩 ";
  heading1.style.width = "75%";

}
else if (randomNumber2>randomNumber1){
  var heading2 = document.querySelector("h1");
  heading2.innerHTML = "Player 2 wins!🚩 ";
  heading2.style.width = "75%";
}
else if (randomNumber1==randomNumber2){
  var heading3 = document.querySelector("h1");
  heading3.innerHTML = "Draw! ";
  heading3.style.textAlign = "center";
}
