const Green = document.querySelector('#circle1');
//Green.addEventListener('click', makeGreen);

const Yellow = document.querySelector('#circle2');
//Yellow.addEventListener('click', makeYellow);

const Red = document.querySelector('#circle3');
//Red.addEventListener('click', makeRed);

const Black = document.querySelector('.one');
Black.addEventListener('click', makeBlack);


function makeGreen() {
    Green.style.background = ('green');
    Green.removeEventListener('click', makeGreen);
    Green.addEventListener('click', makeYellow);
   // Green.addEventListener('click', makeRed);
} 

Green.addEventListener('click', makeGreen);

function makeYellow() {
    Yellow.style.background = ('yellow');
    Yellow.removeEventListener('click', makeYellow);
    Yellow.addEventListener('click', makeRed);
}
Yellow.addEventListener('click', makeYellow);

function makeRed() {
    Red.style.background = ('red');
    Red.removeEventListener('click', makeRed);
    Red.addEventListener('click', makeGreen);
  
}
Red.addEventListener('click', makeRed);

function makeBlack() {
    Black.style.background = ('black');
    Black.removeEventListener('click', makeBlack);
    
}
Black.addEventListener('click', makeBlack);


