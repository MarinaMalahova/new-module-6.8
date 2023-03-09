
let myClicks = document.querySelector('.btn');
myClicks.addEventListener('click', myClick);

let inputIn = document.querySelector('.textFiled');

function myClick(event) {

    let texts = document.querySelector('#duplicateField');
    texts.textContent = inputIn.value;
    inputIn.value = " ";
    console.log(inputIn.value); 
    event.preventDefault();

}


/*document.addEventListener('input', (event) => { //не работает, выдает Eror
     //Отключаем событие по умолчанию        //Uncaught TypeError: event.prevent is undefined
        event.preventDefault(); 
    //Очищаем поля формы 
        event.target.reset(); 
    });*/