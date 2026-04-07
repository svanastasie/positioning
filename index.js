/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const modal = document.querySelector('.modal');
const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-icon');

openButton.onclick = () => {
    modal.style.display = 'flex';
}

closeButton.onclick = () => {
    modal.style.display = 'none';
}