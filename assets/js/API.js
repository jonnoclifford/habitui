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