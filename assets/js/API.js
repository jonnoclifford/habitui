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

//joke function

const jokeContainer = document.querySelector('.joke-text');

function getJoke(){
    // Set a custom User-Agent header as recommended
    const headers = new Headers({
        'Accept': 'application/json',
        'User-Agent': 'YourLibraryOrWebsite (YourURLOrEmail)'
    });

    // API endpoint URL for fetching a random dad joke
    const apiUrl = 'https://icanhazdadjoke.com/';

    // Get the joke container element
    const jokeContainer = document.querySelector('.joke-text');

    // Fetch a random dad joke as JSON
    fetch(apiUrl, { headers })
        .then(response => response.json())
        .then(data => {
        // Handle the JSON response
        console.log(data);
        // Access the joke using data.joke
        const joke = data.joke;
        console.log('Random Dad Joke:', joke);

        // Display the joke in the jokeContainer
        jokeContainer.textContent = joke;
        })
        .catch(error => {
        // Handle errors
        console.error('Error fetching dad joke:', error);
        });
}

getJoke();

// inspirational function

const inspirationalQuoteTextContainer = document.querySelector('.quote-text');
const inspirationalQuoteAuthorContainer = document.querySelector('.quote-author');

// Call the function to get an inspirational quote and update the DOM
getInspirationalQuote().then(function (randomQuote) {
    inspirationalQuoteTextContainer.innerHTML = `"${randomQuote.text}"`;
    inspirationalQuoteAuthorContainer.innerHTML = `${randomQuote.author.split(',')[0].trim()}`;
});

// Function to get an inspirational quote
function getInspirationalQuote() {
    return fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {
        let randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
    });
}