const text = document.querySelector('.inputText');
//console.log(text);
text.addEventListener('click', showtext);
//text.removeEventListener('click', stop);

/*const pr = prompt ('Введите текст');
text.textContent = pr;*/

/*function showtext() {     //--> хотела сделать возврат к исходному тексту
    const show = document.querySelector('.inputText');
    const pr = prompt ('Введите текст');
    show.textContent = pr;
    show.prompt = true;

    const text = document.querySelector('.inputText');
    show.removeEventListener('click', showtext);
    show.addEventListener('click', returntext);
}
 
function returntext() {
     const text = document.querySelector('.inputText');
     text.prompt = false;
     
     const text1 = document.querySelector('.inputText');
     text.removeEventListener('click', returntext);
     text.addEventListener('click', showtext);
}*/

function showtext(event) {
    const show = document.querySelector('.inputText');
    const pr = prompt ('Введите текст');
    show.textContent = pr;
    event.preventDefault()
}
    /*function stop(event) {
        event.preventDefault();
    }*/
    /*show.addEventListener('click',(event) =>{
        event.preventDefault();
    } )*/


/*text.addEventListener('click', function(event) 
{   //this.textContent = pr;
    event.preventDefault();
})*/