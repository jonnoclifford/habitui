# HabitUI - Where Tracking Meets Triumph!

## Project Overview:

The project is a web application named "HabitUI." It is a habit tracking and management tool, featuring sections for inspirational quotes, habit tracking, weather at their chosen location and a joke generator. Users can add, track, and delete habits, view their progress on a chart, and get a random joke. User information is stored in localStorage so the user can return to the app over a period of time to track their progress.

## Technologies Used:

​• Bootstrap 4.0.0: A front-end framework for responsive and mobile-first web development. It's used for styling and layout components.
​

• JavaScript (Vanilla): The primary scripting language for client-side interactions. It interacts with the DOM, fetches data, and handles user actions.

​
• Chart.js: A JavaScript library for creating interactive charts. It's used to visualize habit tracking progress with a bar chart.

​
• jQuery: A fast and concise JavaScript library for simplifying DOM manipulations and AJAX requests. Used for handling events, making AJAX calls, and manipulating the DOM.

## Functionalities:

​• The inspirational quote section displays a quote from a famous person, along with their name. The quotes refresh when the page refreshes.​

​• ​The habits section allows users to add, track, and delete habits. The habits are stored in the browser’s localStorage.​

​​• The progress chart section shows a bar chart that visualizes the user’s habit-tracking progress.​

​• The joke generator section fetches and displays a random dad joke. Users can get a new joke by clicking on a button.

## APIs used in this project:

### Inspirational Quote API Call:
Endpoint: https://type.fit/api/quotes
Description: Fetches a random inspirational quote.
Usage: The JavaScript function getInspirationalQuote() uses the fetch API to make an asynchronous request to the endpoint.
(Apis have 1-1 functions that retrieve the data from the api, convert it into json format, and then put it in the appropriate place in the html).

### Dad Joke API Call:
Endpoint: https://icanhazdadjoke.com/
Description: Fetches a random dad joke.
Usage: The JavaScript function getJoke() uses the fetch API to make an asynchronous request to the endpoint.

### Weather API:
Endpoint: https://openweathermap.org/api
Description: Provides access to location based weather in realtime

## Demo

The following image shows the appearance and functionality of the main dashboard of the application:

![HabitUI Demo](./assets/images/HabitUI-Demo.png)

## Links

[Link to the deployed website](https://jonnoclifford.github.io/habitui/)

[Link to the code repository](https://github.com/jonnoclifford/habitui)

## Credit

Supported by Edx teaching staff, in particular our TA Zakariya Hussain who provided ongoing guidance at all stages of the project development.

## License

MIT License

Copyright (c) 2024 Jonathan Clifford

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
