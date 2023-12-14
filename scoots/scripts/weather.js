/**** First Capital ****/

function capitalizeWords(text) {
    return text.replace(/\b\w/g, (match) => match.toUpperCase());
}

/**** Current ****/

const currentTemp = document.querySelector('.wTemp');
const weatherIcon = document.querySelector('.wIcon');
const captionDesc = document.querySelector('.wDescription');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=15.0794&lon=120.6200&units=metric&appid=a780f5dc068dd2a16ce82f109e3b01b4";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayWeather(data);
            displayWindchill(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        //console.log(error);
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

/**** 3-Day Forecast ****/

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=47.50&lon=19.04&units=metric&appid=a780f5dc068dd2a16ce82f109e3b01b4";

async function forecastApiFetch() {
    try {
        const forecastResponse = await fetch(forecastUrl);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            //console.log(forecastData);
            displayForecast(forecastData);
        } else {
            throw Error(await forecastResponse.text());
        }
    } catch (forecastError) {
        //console.log(forecastError);
    }
}

forecastApiFetch();

function displayForecast(forecastData) {

    const now = new Date();
    now.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    const day1 = { min: 100, max: -100, day: getWeekday(tomorrow) };
    const day2 = { min: 100, max: -100, day: getWeekday(new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000)) };
    const day3 = { min: 100, max: -100, day: getWeekday(new Date(tomorrow.getTime() + 2 * 24 * 60 * 60 * 1000)) };

    forecastData.list.forEach((forecast) => {
        const forecastDate = new Date(forecast.dt * 1000);

        if (forecastDate.getDate() === tomorrow.getDate()) {
            // Day 1
            day1.min = Math.min(day1.min, forecast.main.temp_min);
            day1.max = Math.max(day1.max, forecast.main.temp_max);
        } else if (forecastDate.getDate() === tomorrow.getDate() + 1) {
            // Day 2
            day2.min = Math.min(day2.min, forecast.main.temp_min);
            day2.max = Math.max(day2.max, forecast.main.temp_max);
        } else if (forecastDate.getDate() === tomorrow.getDate() + 2) {
            // Day 3
            day3.min = Math.min(day3.min, forecast.main.temp_min);
            day3.max = Math.max(day3.max, forecast.main.temp_max);
        }
    });
    //console.log(day1, day2, day3);
    const d1name = document.querySelector(".day1name");
    d1name.innerHTML = day1.day;
    const d2name = document.querySelector(".day2name");
    d2name.innerHTML = day2.day;
    const d3name = document.querySelector(".day3name");
    d3name.innerHTML = day3.day;
    const d1min = document.querySelector(".day1min");
    d1min.innerHTML = `Min: ${Math.round(day1.min)}&deg;C`;
    const d2min = document.querySelector(".day2min");
    d2min.innerHTML = `Min: ${Math.round(day2.min)}&deg;C`;
    const d3min = document.querySelector(".day3min");
    d3min.innerHTML = `Min: ${Math.round(day3.min)}&deg;C`;
    const d1max = document.querySelector(".day1max");
    d1max.innerHTML = `Max: ${Math.round(day1.max)}&deg;C`;
    const alertMax = document.querySelector(".alert-box");
    alertMax.innerHTML = `The Max Temperature for the day is ${Math.round(day1.max)}&deg;C <span class="close-btn" onclick="this.parentElement.style.display='none';">&times;</span>`;
    const d2max = document.querySelector(".day2max");
    d2max.innerHTML = `Max: ${Math.round(day2.max)}&deg;C`;
    const d3max = document.querySelector(".day3max");
    d3max.innerHTML = `Max: ${Math.round(day3.max)}&deg;C`;
}
function getWeekday(date) {
    return date.toLocaleDateString(undefined, { weekday: 'long' });
}

/**** Wind Chill ****/

function calculateWindChill(T, V) {
    return 35.74 + 0.6215 * T - 35.75 * Math.pow(V, 0.16) + 0.4275 * T * Math.pow(V, 0.16);
}

let temperature = 40; //°F
let windSpeed = 15;  //mph
let windchill = "N/A"

if (temperature <= 50 && windSpeed > 3) {
    windchill = Math.round(calculateWindChill(temperature, windSpeed) * 100) / 100
}
else {
    windchill = "N/A"
}

document.querySelector(".windchill").innerHTML = "Windchill value: " + windchill;