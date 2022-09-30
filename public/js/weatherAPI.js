const getDataWeatherAPI = () => {
    var apiURL = "http://api.weatherstack.com/current?access_key=250a37986820316c6e3e7d302f19f748&query=Ho%20Chi%20Minh";

    getData(apiURL);
}

async function getData(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data.current.temperature);
    //Icons Weather
    document.getElementById("imageWeather").src = data.current.weather_icons[0];
    //Temperature
    document.getElementById("temperature").innerHTML = data.current.temperature;
    //Country
    document.getElementById("city").innerHTML = data.location.country;
    //Name (City)
    document.getElementById("country").innerHTML = data.location.name;
}

getDataWeatherAPI();
