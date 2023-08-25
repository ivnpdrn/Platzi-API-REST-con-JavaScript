// JavaScript source code

const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_ZnPMS1KWlOzWqHjx9Vk4HDU83GG3s8oooyjD7JdbbXY2EcQrtR4LWZyd4K7itAfl';

const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_ZnPMS1KWlOzWqHjx9Vk4HDU83GG3s8oooyjD7JdbbXY2EcQrtR4LWZyd4K7itAfl';

const spanError = document.getElementById('error')       

async function loadRandomMichis() {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log('Random')
    console.log(data)

    //if (res.status !== 200) {
      //  spanError.innerHTML = "Hubo un error" + res.status + data.message;
    //} else {
        
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');

    img1.src = data[0].url;
    img2.src = data[1].url;

    }
    


async function loadFavouriteMichis() {
    const res = await fetch(API_URL_FAVOURITES);
    const data = await res.json();
    console.log('Favoritos')
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error" + res.status;
    }
}

async function saveFavouriteMichis() {
    const res = await fetch(API_URL_FAVOURITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                image_id: 12
            }),
    });

    const data = await res.json();



    console.log('Save')
    console.log(res)

     //if (res.status !== 200) {
       // spanError.innerHTML = "Hubo un error" + res.status;

}


loadRandomMichis();
loadFavouriteMichis();


//