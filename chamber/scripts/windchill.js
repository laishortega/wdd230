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