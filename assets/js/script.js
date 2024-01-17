document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Check if the user has a preference for dark mode
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set initial dark mode state
  if (localStorage.getItem('darkMode') === 'enabled' || (prefersDarkMode && !localStorage.getItem('darkMode'))) {
    enableDarkMode();
    darkModeToggle.checked = true;
  }

  // Toggle dark mode
  darkModeToggle.addEventListener('change', function () {
    if (darkModeToggle.checked) {
      enableDarkMode();
      localStorage.setItem('darkMode', 'enabled');
    } else {
      disableDarkMode();
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  function enableDarkMode() {
    body.classList.add('dark-mode');
  }

  function disableDarkMode() {
    body.classList.remove('dark-mode');
  }
});
