var dice1=Math.floor(Math.random()*6)+1;

var dice2=Math.floor(Math.random()*6)+1;


var image1=document.querySelector(".img1");
var image2=document.querySelector(".img2");

var theWinner=document.querySelector("h1");



var diceString1="dice"+dice1+".png";
var diceString2="dice"+dice2+".png";

var flag1 = document.getElementById("Flag1");
var flag2 = document.getElementById("Flag2");

image1.setAttribute("src", "./images/"+diceString1);
image2.setAttribute("src", "./images/"+diceString2);

if (dice1>dice2){
           
    flag1.classList.remove("hidden");
    theWinner.innerHTML="Player 1 Wins!"
}
else if (dice2>dice1) {
            
    flag2.classList.remove("hidden");
    theWinner.innerHTML="Player 2 Wins!"
}
else{
    //var html_to_insert="<p>The score is deuce!</p>";
    // theCont=document.querySelector(".container");
    theWinner.innerHTML="The Score is Deuce!"
    theWinner.style.fontSize="7.5rem"

    //theCont.style.flexDirection="column";
    //theCont.innerHTML += html_to_insert;

    }
    
