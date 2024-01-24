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
      updateLogoForDarkMode(true);
    } else {
      disableDarkMode();
      localStorage.setItem('darkMode', 'disabled');
      updateLogoForDarkMode(false);
    }
  });

  function enableDarkMode() {
    body.classList.add('dark-mode');
  }

  function disableDarkMode() {
    body.classList.remove('dark-mode');
  }

  function updateLogoForDarkMode(isDarkMode) {
    // Change logo based on dark mode
    const logoImage = document.querySelector('.logo img');
    logoImage.src = isDarkMode ? './assets/images/HabitUI_Logo_dark.png' : './assets/images/HabitUI_Logo.png';
  }
});

//Habits function
const habitsContainer = document.querySelector('.task-list');
const habitsChartCanvas = document.getElementById('habitsChart');
const newHabitInput = document.getElementById('newTaskInput');

let habits = JSON.parse(localStorage.getItem('habits')) || [];

// Render habits on page load
renderHabits();
// Update the habits chart
updateChart();

// Function to add a new habit
function addHabit() {
  const habitName = newHabitInput.value.trim();

  if (habitName !== '') {
      habits.push({ name: habitName, count: 0 });
      renderHabits();
      updateChart();
      saveHabitsToLocalStorage();

      // Check if the maximum limit of habits is reached and hide the 'new-habit' section
      if (habits.length >= 5) {
          document.querySelector('.new-habit').style.display = 'none';
      }
  }
  newHabitInput.value = '';
}

// Function to increment habit count
function incrementHabit(index) {
    habits[index].count++;
    renderHabits();
    updateChart();
    saveHabitsToLocalStorage();
}

// Function to decrement habit count
function decrementHabit(index) {
    if (habits[index].count > 0) {
        habits[index].count--;
        renderHabits();
        updateChart();
        saveHabitsToLocalStorage();
    }
}

// Function to delete a habit
function deleteHabit(index) {
  habits.splice(index, 1);
  renderHabits();
  updateChart();
  saveHabitsToLocalStorage();

  if (habits.length <= 4) {
      document.querySelector('.new-habit').style.display = 'grid';
  }
}

// Function to render habits in the HTML
function renderHabits() {
    habitsContainer.innerHTML = '';

    habits.forEach((habit, index) => {
        const habitItem = document.createElement('li');
        habitItem.className = 'task-item';

        habitItem.innerHTML = `
            <div class="task-text">${habit.name}: ${habit.count}</div>
            <button title='Increase Habit' class="btn btn-outline-success task-btn p-1 rounded-circle" style="font-weight: 700" onclick="incrementHabit(${index})">+</button>
            <button title='Decrease Habit' class="btn btn-outline-warning task-btn p-1 rounded-circle ml-1" style="font-weight: 700" onclick="decrementHabit(${index})">-</button>
            <button title='Delete Habit' class="btn btn-outline-danger task-btn p-1 rounded-circle ml-1" style="font-weight: 700" onclick="deleteHabit(${index})">x</button>
        `;

        habitsContainer.appendChild(habitItem);
    });
}

// Function to update the habits chart
function updateChart() {
    const ctx = habitsChartCanvas.getContext('2d');

    // Check if a chart instance already exists
    if (window.myHabitsChart) {
        // Check if the goal of 60 days is reached
        const isGoalReached = habits.some(habit => habit.count >= 60);

        if (isGoalReached) {
            // Prompt congratulation and destroy the chart
            congratulateUser();
            window.myHabitsChart.destroy();
            return;
        }

        window.myHabitsChart.destroy();
    }

    const labels = habits.map(habit => habit.name);
    const data = habits.map(habit => habit.count);

    // Calculate progress towards the goal of 60 days
    const progress = data.map(count => Math.min(count / 60, 1)); // Progress capped at 1

    // Generate colors based on progress
    const colors = progress.map(p => getColorBasedOnProgress(p));

    window.myHabitsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Habit Count',
                data: data,
                backgroundColor: colors,  // Use the generated colors
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
// Function to congratulate the user
function congratulateUser() {
    const congratsMessage = "Congratulations! You've reached your 60-day goal!";
    alert(congratsMessage)
}
// Function to generate a color based on progress
function getColorBasedOnProgress(progress) {
    // Use HSL color representation to control darkness
    const hue = 280;  // Green hue
    const saturation = 100;  // Full saturation
    const lightness = 25 + 50 * (1 - progress);  // Adjust lightness based on progress (darker as progress increases)

    // Convert HSL to RGB
    const rgb = hslToRgb(hue / 360, saturation / 100, lightness / 100);

    // Format RGB as rgba for Chart.js
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.75)`;
}

// Function to convert HSL to RGB
function hslToRgb(h, s, l) {
    let r, g, b;

    if (s === 0) {
        r = g = b = l; // Achromatic
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}


// Function to save habits to local storage
function saveHabitsToLocalStorage() {
    localStorage.setItem('habits', JSON.stringify(habits));
}

// Event listener for adding a new habit
document.getElementById('addHabitBtn').addEventListener('click', addHabit);
