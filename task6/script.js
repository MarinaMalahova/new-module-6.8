

const Green = document.querySelector('#circle1');
Green.addEventListener('click', makeGreen);

const Yellow = document.querySelector('#circle2');
Yellow.addEventListener('click', makeYellow);

const Red = document.querySelector('#circle3');
Red.addEventListener('click', makeRed);


function makeGreen() {
    Green.style.background = ('green');

   // Green.removeEventListener('click', makeGreen);
    //Green.addEventListener('click', makeYellow);
   // Green.addEventListener('click', makeRed);
} 

//Green.addEventListener('click', makeGreen);

function makeYellow() {
    Yellow.style.background = ('yellow');
   //Yellow.removeEventListener('click', makeYellow);
    //Yellow.addEventListener('click', makeRed);
}
//Yellow.addEventListener('click', makeYellow);

function makeRed() {
    Red.style.background = ('red');
    //Red.removeEventListener('click', makeRed);
    //Red.addEventListener('click', makeGreen);
}
//Red.addEventListener('click', makeRed);

//const color = document.addEventListener('.color', function(){
    if(Green.makeGreen ) {
        Green = Green.makeGreen();
    }
    if (Yellow.makeGreen) {
        Yellow = Yellow.makeYellow;
        Green.removeEventListener('click', makeGreen);
        Green = nyll;
    }
    if (Red.makeRed) {
        Red = Red.makeRed;
        Yellow.removeEventListener('click', makeYellow);
        Yellow = nyll;
    }    
        
    //})