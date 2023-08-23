// JavaScript source code

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=2';

        // limit= 3 images & page=2 - mostrar la segunda page

async function loadRandomMichis() {
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log(data)


        // .then(res => res.json())
        // .then(data => {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    

    img1.src = data[0].url;
    img2.src = data[1].url;
    
}

loadRandomMichis()();


//