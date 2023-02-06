// replace your api key 
const API_KEY = "6003b1223b41062230788ffd815091cf";

// create getWeather function here
const getWeather = async (cityName) => {
    // API call
    const COMPLETE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    // Use and return fetch to call the Rest Endpoint of Get Weather Endpoint, return all of the data from the REST API  endpoint
    const res = await fetch(COMPLETE_URL);
    if (!res.ok) {
        throw new Error(`Bad status = ${res.status}`);
    }
    const data = await res.json();
    return data;
}
// export the getWeather function
export { getWeather };