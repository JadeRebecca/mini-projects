/***VARIABLES ***/
var maxCounter = 8;
var nbRound = 1;
var counter = maxCounter-nbRound

var maxPawn = 4;
var pawnNum = 0;

var counterEl = document.getElementById('counter').getElementsByTagName('div');
counterEl[counter].style.border="2px solid red";

var pawnEl = document.getElementById('grid').getElementsByClassName('line')[counter].getElementsByClassName('round')[pawnNum];
pawnEl.style.border="2px solid red";


//modification de la couleur du pion actif au clic sur une des couleurs
var pawnColor1 = document.getElementById('color1');

pawnColor1.addEventListener("click", function(e) {
    pawnEl.style.backgroundColor = getComputedStyle(e.target).backgroundColor;
});
