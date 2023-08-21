// JavaScript source code
console.log('Hello, world')

const API_URL = 'https://api.thecatapi.com/v1/images/search';

async function reload() {
    const res = await fetch(API_URL);
    const data = await res.json();



        // .then(res => res.json())
        // .then(data => {
     const img = document.querySelector('img');
     img.src = data[0].url;
}

reload();

    // JavaScript script:
    // Fech API:
    // The fetch(URL) function is used to send a GET request to the specified URL ('https//api.thecatapi.com/v1/images/search').
    // This API returns JSON data containing information about a random cat image.

    // The final effect is that the fetched cat image URL is assigned to the src attribute of the <img> element,
    // causing the image to be displayed on the webpage.

// Promise Chaining:
// The.then() function is used to handle the asynchronous response from the API.
// The first.then() converts the response to JSON format using res.json().
// The second.then() extracts the URL of the image from the JSON data and updates the src attribute of the < img > element.

// Rendering in HTML:
// The HTML < img > element has an empty alt attribute, which is typically used for accessibility purposes.
// It's a good practice to provide a meaningful description of the image in the alt attribute.

// When you load the HTML page in a browser, the JavaScript code is executed,
// initiating the API request to fetch a random cat image.Once the response is received,
// the image URL is assigned to the < img > element's src attribute,
// leading to the display of the fetched cat image on the webpage.

