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
  
  getDadJoke().then(joke => {
    console.log(joke);
});
  