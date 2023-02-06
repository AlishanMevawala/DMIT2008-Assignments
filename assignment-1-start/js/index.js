// Include your assignment 1 below.
// Read the PDF for instruction on what to do.
// Ensure that you look at the "Marking Key" section of the PDF
// to not lose any marks.

import 'bootstrap/dist/css/bootstrap.min.css';
import { getWeather } from './api/base.js';
import { renderWeather } from './dom/weather.js';

let weatherData = document.querySelector(".weather-container");

const showWeather = async () => {
    try {
        let data = await getWeather(cityName);
        console.log(data);
        data.results.map((weatherDataMap) => {
            console.log(`weatherDataMap = `);
            console.log(weatherDataMap);
            renderWeather(weatherDataMap, weatherData)
        });
    } catch (error) {
        console.error(error);
    }
}

let weatherInput = document.querySelector("#weather-search");
weatherInput.addEventListener("submit", showWeather);
