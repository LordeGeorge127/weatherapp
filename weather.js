let weather = {
    "apiKey": "10f6da2cc3ff813915aae11547c89601",
    fetchweather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey)



            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + " °C ";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Windspeed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"

    },
    search: function () {
        this.fetchweather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();


});
document.querySelector(".search-bar").addEventListener("keyup", function () {
    if (event.key == "Enter") {
        weather.search();
    }
});
weather.fetchweather("denver");