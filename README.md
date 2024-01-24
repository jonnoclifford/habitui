# habitui

The project is a web application named "HabitUI." It is  a habit tracking and management tool, featuring sections for inspirational quotes, habit tracking, and a joke generator. Users can add, track, and delete habits, view their progress on a chart, and get a random joke.

## Technologies Used:

Bootstrap 4.0.0: A front-end framework for responsive and mobile-first web development. It's used for styling and layout components.
JavaScript (Vanilla): The primary scripting language for client-side interactions. It interacts with the DOM, fetches data, and handles user actions.
Chart.js: A JavaScript library for creating interactive charts. It's used to visualize habit tracking progress with a bar chart.
jQuery: A fast and concise JavaScript library for simplifying DOM manipulations and AJAX requests. Used for handling events, making AJAX calls, and manipulating the DOM.

## Functionalities:

Inspirational Quote Section: Displays an inspirational quote with its author.
Habits Section: Allows users to add, track, and delete habits. Habit data is stored in localStorage for persistence.
Progress Chart: Visualizes habit tracking progress using Chart.js.
Joke Generator: Fetches and displays a random dad joke from "icanhazdadjoke.com" on button click.

## API-s used in this project:

Inspirational Quote API Call:
Endpoint: https://type.fit/api/quotes
Description: Fetches a random inspirational quote.
Usage: The JavaScript function getInspirationalQuote() uses the fetch API to make an asynchronous request to the endpoint.
(Apis have 1-1 functions that retrieve the data from the api, convert it into json format, and then put it in the appropriate place in the html).


## Dad Joke API Call:

Endpoint: https://icanhazdadjoke.com/
Description: Fetches a random dad joke.
Usage: The JavaScript function getJoke() uses the fetch API to make an asynchronous request to the endpoint.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Credit 

N/A

## Link

Feel free to visit our project webpage:
https://jonnoclifford.github.io/habitui/

![Screenshot (42)](https://github.com/jonnoclifford/habitui/assets/147996856/01780846-c49b-43f9-ae7e-f90b548f2baa)

