// const getDataWeatherAPI = () => {
//     var apiURL = "https://api.weatherapi.com/v1/current.json?key=a3f6e5b4d1d94c04b7070922223009&q=Ho%20Chi%20Minh&aqi=yes";

//     getData(apiURL);
// }

// async function getData(url) {
//     // Storing response
//     const response = await fetch(url);
//     // Storing data in form of JSON
//     var data = await response.json();
//     //Icons Weather
//     document.getElementById("imageWeather").src = data.current.condition.icon;
//     //Temperature
//     if (data.current.condition.text === "Light rain shower") {
//         document.getElementById("temperature").innerHTML = "Mưa rào nhẹ" + " " + data.current.temp_c;
//     } else if (data.current.condition.text === "Partly cloudy") {
//         document.getElementById("temperature").innerHTML = "Trời nhiều mây" + " " + data.current.temp_c;
//     } else if (data.current.condition.text === "Patchy rain possible") {
//         document.getElementById("temperature").innerHTML = "Mưa giông vài nơi" + " " + data.current.temp_c;
//     } else if (data.current.condition.text === "Patchy light rain with thunder") {
//         document.getElementById("temperature").innerHTML = "Mưa kèm theo sấm sét" + " " + data.current.temp_c;
//     } else {
//         document.getElementById("temperature").innerHTML = data.current.condition.text + " " + data.current.temp_c;
//     }
//     //Country
//     document.getElementById("city").innerHTML = data.location.country;
//     //Name (City)
//     document.getElementById("country").innerHTML = data.location.name;
// }

// getDataWeatherAPI();