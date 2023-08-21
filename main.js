// JavaScript source code
console.log('Hello, world')

const URL = 'https://api.thecatapi.com/v1/images/search';

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img'); // quiero tomar este nodo del HTML 'img'
        img.src = data[0].url; // modificarle su propiedad, la propiedad 'url'
    });