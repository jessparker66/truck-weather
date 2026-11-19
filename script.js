const url = "https://api.open-meteo.com/v1/forecast?latitude=35.787743&longitude=-78.638265&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit";

const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

button.addEventListener("click", getWeather);

async function getWeather() {
    weatherArea.textContent = "";   // clear old results first

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // 1. Temperature
    const temp = document.createElement("p");
    temp.className = "fs-5";
    temp.textContent = "Temperature: " + data.current.temperature_2m + " " + data.current_units.temperature_2m;
    weatherArea.appendChild(temp);

    // 2. Wind speed
    const wind = document.createElement("p");
    wind.className = "fs-5";
    wind.textContent = "Wind speed: " + data.current.wind_speed_10m + " " + data.current_units.wind_speed_10m;
    weatherArea.appendChild(wind);

    // 3. Time of the reading
    const time = document.createElement("p");
    time.className = "fs-5";
    time.textContent = "Reading taken at: " + data.current.time + " (" + data.timezone + ")";
    weatherArea.appendChild(time);
}