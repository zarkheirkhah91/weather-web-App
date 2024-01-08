// const apiKey = "59bce4e934cea22107fc700406cf42e2";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

// async function checkWeather(){
//     const response = await fetch(apiUrl + `&appid=${apiKey}`);
//     const data = await response.json();

//     console.log(data);
//     console.log(response);
// }


// checkWeather();



// const weather = {
//     apikey : "59bce4e934cea22107fc700406cf42e2",
//     urlkey : "https://api.openweathermap.org/data/2.5/weather?q=",
//     fetchWeather: function(city){
//         fetch(this.urlkey + city + "&units=metric&appid=" + this.apikey)
//         .then((Response) => Response.json())
//         .then((data) => this.displayWeather(data));
//     },
//     displayWeather: function(data){
//         const{name} = data;
//         const{icon, description} = data.weather[0];
//         const{temp, humidity} = data.main;
//         const{speed} = data.wind;
//         console.log(name, icon, description, temp, humidity, speed);
//         document.querySelector(".city").innerText= "weather in " + name;
//         document.querySelector("icon").src = 

//     }
// }



const apiKey = "59bce4e934cea22107fc700406cf42e2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humiditynumber").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    if (data.weather[0].main == "clouds") {
        weatherIcon.src = "images/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/sunny.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "drizzle") {
        weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "snowy") {
        weatherIcon.src = "images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";


}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})





















