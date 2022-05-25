const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'RctfD7JCK10h5J1s_mbAiBr9YSVV7dP4SVthqGEN2Dg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&YOUR_ACCESS_KEY&count=${count}`;

//helper function to set atrributes on DOM elements
function setAttributes(element, atrributes) {
    for (const key in atrributes) {
        element.setAttribute(key, atrributes[key])
    }
}

// create element for links & photos, add to DOM
function displayPhotos(){
    //run function for each object in photosArray
    photosArray.forEach((photo) => {
        //create <a> to link to unsplash
        const item = document.createElement('a');

        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        
        //new ease version
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });

        //create <img> for photo
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);

        //new ease version
        setAttributes(img, { 
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        //put <img> inside <a>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

//get photos from unsplash api
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error){
        //catch error here
    }
}

// checj to see if scrolling near bottom of page, load more photos
window.addEventListener('scroll', () => {
   console.log('scrolled') 
});

// On load
getPhotos();