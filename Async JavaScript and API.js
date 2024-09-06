const API_KEY = 'your_api_key_here';  
const BASE_URL = 'https://gateway.marvel.com/v1/public/characters';

async function fetchCharacters() {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}`);
    const data = await response.json();
    console.log(data);  
fetchCharacters();

async function displayCharacters() {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}`);
    const data = await response.json();
    
    const charactersContainer = document.getElementById('characters'); 

    data.data.results.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.innerHTML = `
            <h3>${character.name}</h3>
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}">
        `;
        charactersContainer.appendChild(characterElement);
    });
}
displayCharacters();

function startCountdown(duration) {
    let timeRemaining = duration;
    const timerDisplay = document.getElementById('timer');

    const interval = setInterval(() => {
        timerDisplay.textContent = `Time Remaining: ${timeRemaining} seconds`;
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(interval);
            timerDisplay.textContent = "Time's up!";
        }
    }, 1000);
}

startCountdown(10); 

function showNotification() {
    alert('This is a delayed notification');
}

setTimeout(showNotification, 3000);  

let notificationInterval;

function showRepeatedNotification() {
    notificationInterval = setInterval(() => {
        alert('This is a repeated notification');
    }, 5000);  

function stopNotification() {
    clearInterval(notificationInterval);
}




