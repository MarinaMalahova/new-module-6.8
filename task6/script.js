

 /* // не работает

const Green = document.querySelector('#circle1');
Green.addEventListener('click', makeGreen);

const Yellow = document.querySelector('#circle2');
Yellow.addEventListener('click', makeYellow);

const Red = document.querySelector('#circle3');
Red.addEventListener('click', makeRed);

const Black = document.querySelector('.one');
Black.addEventListener('click', Black);
//const Black = document.querySelector('.one');
//Black.addEventListener('click', makeBlack);

function makeGreen() { 
    Green.style.background = ('green'); 
    Green.addEventListener('click', makeGreen);
    Green.removeEventListener('click', makeGreen);
    
    //Green.onclick = makeYellow();
    //Green.addEventListener('click', makeRed);
    //Black.addEventListener('click', makeBlack);
    //Red.removeEventListener('click', makeRed);
    //Green.addEventListener('click', makeYellow);
    //Yellow.removeEventListener('click', makeYellow);
} 

//Green.addEventListener('click', makeGreen);

function makeYellow() {
    Yellow.style.background = ('yellow');
    Yellow.addEventListener('click', makeYellow);
    Yellow.removeEventListener('click', makeYellow); 
    //Yellow.addEventListener('click', makeRed);
    //Red.removeEventListener('click', makeRed);
    //Yellow.addEventListener('click', makeBlack);
}
//Yellow.addEventListener('click', makeYellow);

function makeRed() {
    Red.style.background = ('red');
    Red.addEventListener('click', makeRed);
    Red.removeEventListener('click', makeRed);
    //Red.addEventListener('click', makeGreen);
    //Green.removeEventListener('click', makeGreen);
    //Red.addEventListener('click', makeBlack);
}
//Red.addEventListener('click', makeRed);
Green.addEventListener('click', makeGreen);

//function makeBlack() { 
    //Black.style.background = ('black'); }
    //Black1.addEventListener('onclick', makeGreen);
    //Black.removeEventListener('onclick', makeGreen);
   // Black.addEventListener('onclick', makeRed);}



//const one = document.querySelector('.one');


//one.addEventListener('click', function(one) {
   /* if('click',Green.makeGreen) {
        Green.style.background = ('green'); 

    }
    else {
        Green.style.background = ('black'); 
    }

    
    if(makeYellow) {
        Yellow.style.background = ('yellow'); 
    }
    else {
        Yellow.style.background = ('black'); 
    }   
    if(makeRed) {
        Red.style.background = ('red'); 
    }
    else {
        Red.style.background = ('black'); 
    }  }
)*/

/*//работает только зеленый цвет, загорается и тушит остальные

const Green = document.querySelector('#circle1');
  Green.addEventListener('click', function(green){
  Green.style.background = ('green');
  Green.removeEventListener('click', green); //данная функция должна остановливать действие
  //Green.addEventListener('click', yellow); //Eror функция yellow не найдена
  //Green.addEventListener('click', black1);  //не работает
});                         
 
 //в конец функции надо дописать действие выключения но я понятия не имею как это сдедать
 //
 const Yellow = document.querySelector('#circle2');
 Yellow.addEventListener('click', function(yellow){
 Yellow.style.background = ('yellow');
 Yellow.removeEventListener('click', yellow);
});

const Red = document.querySelector('#circle3');
 Red.addEventListener('click', function(red){
 Red.style.background = ('red');
 Red.removeEventListener('click', red); 
})

const Black = document.querySelector('.one');
Black.addEventListener('click', black1, black2, black3);
function black1() {          //зеленый выключает желтый и красный, зеленый горит
    Green.onclick = ('green');      
    Yellow.style.background = ('black');
    Red.style.background = ('black');}
    //Yellow.onclick = ('yellow');       // не работает
    //Green.style.background = ('black');
    //Red.style.background = ('black');
 
//Black.addEventListener('click', black2); //зеленый становиться черным и выключает желтый и красный
function black2() {    //желаемый результат не получен!!!
    Yellow.onclick = ('yellow');
    Green.style.background = ('black');
    Red.style.background = ('black');
    
} 

function black3() {    //желаемый результат не получен!!!
    Red.onclick = ('red');
    Green.style.background = ('black');
    Yellow.style.background = ('black');
    
} 

//Black1.addEventListener('click', function(black){
 //   Black1.style.background = ('black');
  //  Black1.removeEventListener('click', black);
  // });*/

// обращение к каждому из элементов через id

const Green = document.querySelector('#circle1');
Green.addEventListener('click', makeGreen);

const Yellow = document.querySelector('#circle2');
Yellow.addEventListener('click', makeYellow);

const Red = document.querySelector('#circle3');
Red.addEventListener('click', makeRed);

function makeGreen() { 
    Green.style.background = ('green'); 
    Green.addEventListener('click', makeGreen);
    Green.removeEventListener('click', makeGreen);
    Green.addEventListener('click', black1);
}

    function makeYellow() {
        Yellow.style.background = ('yellow');
        Yellow.addEventListener('click', makeYellow);
        Yellow.removeEventListener('click', makeYellow);
        Yellow.addEventListener('click', black2); }
        
        function makeRed() {
            Red.style.background = ('red');
            Red.addEventListener('click', makeRed);
            Red.removeEventListener('click', makeRed);}

const Black1 = document.querySelector('#circle1'); 
Black1.addEventListener('click', black1);

const Black2 = document.querySelector('#circle2');   
Black2.addEventListener('click', black2);

const Black3 = document.querySelector('#circle3');     
Black3.addEventListener('click', black3);

function black1(){
    Green.onclick = ('green');      
    Yellow.style.background = ('black');
    Red.style.background = ('black');}

    function black2(){
        Yellow.onclick = ('yellow');      
        Red.style.background = ('black');
        Green.style.background = ('black');}
        
        function black3(){
            Red.onclick = ('red');      
            Green.style.background = ('black');
            Yellow.style.background = ('black');}