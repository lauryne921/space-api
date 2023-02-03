fetch('https://api.nasa.gov/planetary/apod?api_key=OUTtMFJPAwpq2D2Fc664BBcUic6jgT88MBRdISVz')
.then(res => res.json())
.then(data => {
    const picture = document.getElementById('image'); 
    const titlePicture = document.getElementById('title-image'); 
    const copyright = document.getElementById('copyright'); 
    const date = document.getElementById('date'); 
    const explanation = document.getElementById('explanation'); 

    picture.style.backgroundImage = `url('${data.url}')`; 
    picture.style.backgroundSize = 'cover'; 
    titlePicture.textContent = data.title; 
    copyright.textContent = data.copyright; 
    date.textContent = data.date; 
    explanation.textContent = data.explanation;
}); 