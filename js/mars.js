const curiosityRover = document.querySelector('.curiosity'); 
const opportunityRover = document.querySelector('.opportunity'); 
const spiritRover = document.querySelector('.spirit');

const wrapper = document.getElementById('wrapper'); 

let photos = []; 

getRightApi('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=OUTtMFJPAwpq2D2Fc664BBcUic6jgT88MBRdISVz'); 


function getRightApi(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        photos = data.photos.map(photo => {
            displayMarsPhotos(photo);
        }); 
    }); 
}

function displayMarsPhotos(photo) {
    const elementTemplate = document.getElementById('photo-template'); 
    const elementCard = elementTemplate.content.cloneNode(true).children[0];

    fillContent(photo, elementCard);
}


function fillContent(photo, marsCard) {
    const image = marsCard.querySelector('#image');
    const cameraName = marsCard.querySelector('#camera-name'); 
    const roverName = marsCard.querySelector('#rover-name');
    const roverStatus = marsCard.querySelector('#rover-status');
    const landingDate = marsCard.querySelector('#rover-landing');  

 
    image.style.backgroundImage = `url('${photo.img_src}')`; 
    image.style.backgroundSize = 'cover'; 
    cameraName.textContent = photo.camera.full_name;
    roverName.textContent = photo.rover.name; 
    roverStatus.textContent = 'Satatus : ' + photo.rover.status; 
    landingDate.textContent = 'Landing date : ' + photo.rover.landing_date; 
    document.getElementById('rover-span').textContent = photo.rover.name;

    wrapper.append(marsCard); 
}



curiosityRover.addEventListener('click', () => {
    wrapper.innerHTML = ''; 
    getRightApi('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=OUTtMFJPAwpq2D2Fc664BBcUic6jgT88MBRdISVz'); 
});


opportunityRover.addEventListener('click', () => {
    wrapper.innerHTML = ''; 
    getRightApi('https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=OUTtMFJPAwpq2D2Fc664BBcUic6jgT88MBRdISVz'); 
}); 

spiritRover.addEventListener('click', () => {
    wrapper.innerHTML = ''; 
    getRightApi('https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=OUTtMFJPAwpq2D2Fc664BBcUic6jgT88MBRdISVz'); 
}); 