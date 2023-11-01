
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
        
        // // Weather main data
        // let main = data.current.weather.main;
        // let description = data.current.weather[0].description;
        // let temp = Math.round(data.current.temp);
        // let humidity = data.current.humidity;
        // let wind = data.current.wind;
        
          // Weather hourly data
        let hourNow = data.hourly[0].temp;
        let hour1 = data.hourly[1].temp;
        let hour2 = data.hourly[2].temp;
        let hour3 = data.hourly[3].temp;
        let hour4 = data.hourly[4].temp;
        let hour5 = data.hourly[5].temp;

        document.querySelector(".hour-now").innerHTML = data.hourly[0].temp;;
        document.querySelector(".hour1").innerHTML = hour1;
        document.querySelector(".hour2").innerHTML = hour2;
        document.querySelector(".hour3").innerHTML = hour3;
        document.querySelector(".hour4").innerHTML = hour4;
        document.querySelector(".hour5").innerHTML = hour5;


        // Weather daily data
        let tomorrowTemp = Math.round(data.daily[0].temp.day);
        let datTemp = Math.round(data.daily[1].temp.day);
        let tomorrowMain = data.daily[0].weather[0].main;
        let datTempMain = data.daily[1].weather[0].main;
    


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