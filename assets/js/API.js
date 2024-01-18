// Function to fetch a dad joke
async function getDadJoke() {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.joke;
    } catch (error) {
      console.error('Error fetching dad joke:', error);
      return 'Failed to fetch dad joke';
    }
  }
  
function updateJokeUI(joke) {
    $('.joke-text').text(joke);
}

$('#joke-button').on('click', async function () {
    const joke = await getDadJoke();
    updateJokeUI(joke);
});
  
// function for motivational quotes
async function getMotivationalQuote() {
const quotableApiUrl = 'https://api.quotable.io/random';

  try {
    const response = await fetch(quotableApiUrl);
    const data = await response.json();
  // Update the HTML content with the fetched quote
  document.getElementById('inspirational-quote').innerText = data.content;
} catch (error) {
  console.error('Error fetching motivational quote:', error);
  // Display an error message if fetching fails
  document.getElementById('inspirational-quote').innerText = 'Failed to fetch the quote.';
}
}
getMotivationalQuote();

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
