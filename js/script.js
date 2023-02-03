const wrapper = document.getElementById('wrapper'); 
const generateBtn = document.getElementById('generate-btn'); 


generateBtn.addEventListener('click', () => {
    const dateBirthValue = document.getElementById('date-birth').value; 

    getAPi(dateBirthValue);
}); 


displayPictureOfTheDay();

function displayPictureOfTheDay() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=OUTtMFJPAwpq2D2Fc664BBcUic6jgT88MBRdISVz')
    .then(res => res.json())
    .then(data => {
        const pictureOfTheDay = document.getElementById('picture-of-the-day'); 

        pictureOfTheDay.style.backgroundImage = `url('${data.url}')`; 
        pictureOfTheDay.style.backgroundSize = 'cover'; 

        const titlePicture = document.getElementById('title-picture'); 

        titlePicture.textContent = data.title;
    });
}


function getAPi(dateBirthValue) {
    const debutUrl = 'https://api.nasa.gov/planetary/apod?date='; 
    const endUrl = '&api_key=OUTtMFJPAwpq2D2Fc664BBcUic6jgT88MBRdISVz';

    fetch(`${debutUrl + dateBirthValue + endUrl}`)
    .then(res => res.json())
    .then(data => {
        wrapper.innerHTML = '';
        displayPhoto(data); 
    })
    .catch(err => console.log(err)); 
}


function displayPhoto(data) {
    const elementTemplate = document.getElementById('photo-template'); 
    const elementCard = elementTemplate.content.cloneNode(true).children[0];

    fillContent(data, elementCard); 
}


function fillContent(data, photoCard) {
    const title = photoCard.querySelector('#title'); 
    const date = photoCard.querySelector('#date');
    const image = photoCard.querySelector('#image');
    const explanation = photoCard.querySelector('#explanation'); 


    title.textContent = data.title; 
    date.textContent = data.date; 
    image.style.backgroundImage = `url('${data.url}')`; 
    image.style.backgroundSize = 'cover'; 
    explanation.textContent = data.explanation;

    wrapper.append(photoCard); 
}
