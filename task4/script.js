const text = document.querySelector('.inputText');

text.addEventListener('click', showtext);

function showtext(event) {
    const show = document.querySelector('.inputText');
    const pr = prompt ('Введите текст');
    show.textContent = pr;
    event.preventDefault()
}
   