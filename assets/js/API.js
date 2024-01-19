//function for weather
$(document).ready(function () {
    // Event handler for form submission
    $("#search-form").submit(function (event) {
        event.preventDefault();
        var cityName = $("#search-input").val().trim();
        if (cityName !== "") {
            getWeatherData(cityName);
            $("#search-input").val("");
        }
    });
});

function getWeatherData(cityName) {
    var apiKey = '155762a56bacbcb490402c8eeb8ef0b7';
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    $.ajax({
        url: apiUrl,
        method: "GET",
        success: function (response) {
            updateWeatherUI(response);
        },
        error: function (error) {
            console.log("Error fetching weather data: ", error);
        }
    });
}

function getWeatherData(cityName) {
    var apiKey = '155762a56bacbcb490402c8eeb8ef0b7';
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    $.ajax({
        url: apiUrl,
        method: "GET",
        success: function (response) {
            updateWeatherUI(response);
        },
        error: function (error) {
            console.log("Error fetching weather data: ", error);
        }
    });
}

function updateWeatherUI(data) {
    var cityName = data.name;
    var temperature = data.main.temp;
    var humidity = data.main.humidity;
    var weatherDescription = data.weather[0].description;
    var weatherIcon = data.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

    var weatherContent = "<div class='weather-box'>" +
                         "<h2>" +
                         "<img src='" + iconUrl + "' alt='Weather Icon'>" +
                         cityName +
                         "</h2>" +
                         "<p>Temperature: " + temperature + " K</p>" +
                         "<p>Humidity: " + humidity + "%</p>" +
                         "<p>Description: " + weatherDescription + "</p>" +
                         "</div>";

    $("#current-weather").html(weatherContent);
}
