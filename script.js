
const apiKey = "8b2607ec2a1126e0760e240231da1a2e";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const card = document.querySelector(".card"); 
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".not-found");

async function getWeather(city_name){
    const response = await fetch(apiURL+ city_name +`&appid=${apiKey}`);
    if (response.status == 404){
        card.style.height = "404px";
        weather.classList.remove("active");
        error.classList.add("active");
        return;
    }
    else{
        var data = await response.json();

        card.style.height = "555px";
        weather.classList.add("active");
        error.classList.remove("active");

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }

        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }

        if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }

        if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }

        if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }

        if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display= "none" ;
    }
    
}

searchBtn.addEventListener("click", ()=> {
    getWeather(searchBox.value);
})