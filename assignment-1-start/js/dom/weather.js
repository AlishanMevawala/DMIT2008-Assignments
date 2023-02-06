/*
HTML Structure 
<div class="mt-2 card" >
  <div class="card-body">
    <h5 class="card-title">CITY_NAME_HERE, COUNTRY_CODE_HERE</h5>
    <h6 class="card-subtitle mb-2 text-muted">CURRENT_WEATHER_DEGREES_HERE</h6>
    <p class="card-text">WEATHER_DESCRIPTION_HERE</p>
  </div>
</div>
*/

// renderWeather function
const renderWeather = (weatherData, dataElement) => {
  let element =
    `
  <div class="mt-2 card">
    <div class="card-body">
      <h5 class="card-title">${weatherData.city.name}, ${weatherData.sys.country}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${weatherData.temperature.value}</h6>
      <p class="card-text">${weatherData.weather.description}</p>
    </div>
  </div>
  `;
  dataElement.innerHTML += element;
}

// export the renderWeather function
export { renderWeather };