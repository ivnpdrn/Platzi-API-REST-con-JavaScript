// JavaScript source code

const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2';

const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_ZnPMS1KWlOzWqHjx9Vk4HDU83GG3s8oooyjD7JdbbXY2EcQrtR4LWZyd4K7itAfl';

        // limit= 3 images & page=2 - mostrar la segunda page

async function loadRandomMichis() {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();

    console.log(data)

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
  
    img1.src = data[0].url;
    img2.src = data[1].url;
    
}

async function loadFavoriteMichis() {
    const res = await fetch(API_URL_FAVOURITES);
    const data = await res.json();

    console.log(data)

}


loadRandomMichis();
loadFavoriteMichis();


//