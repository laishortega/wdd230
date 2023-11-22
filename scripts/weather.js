function capitalizeWords(text) {
    return text.replace(/\b\w/g, (match) => match.toUpperCase());
}

const currentTemp = document.querySelector('.wTemp');
const weatherIcon = document.querySelector('.wIcon');
const captionDesc = document.querySelector('.wDescription');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=15.0594&lon=120.6567&units=metric&appid=a780f5dc068dd2a16ce82f109e3b01b4";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayWeather(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = capitalizeWords(data.weather[0].description);
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", `${desc} weather icon`);
    captionDesc.textContent = desc;
}