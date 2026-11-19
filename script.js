const url = "https://api.open-meteo.com/v1/forecast?latitude=YOUR_LAT&longitude=YOUR_LONG&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit";
const weatherArea = document.getElementById("weather");

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    weatherArea.innerHTML = `
        <p>Temperature: ${data.current.temperature_2m}°F</p>
        <p>Wind Speed: ${data.current.wind_speed_10m} mph</p>
        console.log(data);
    `;
}