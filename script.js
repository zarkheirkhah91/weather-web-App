const apiKey = "59bce4e934cea22107fc700406cf42e2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);
    console.log(response);
}


checkWeather();
