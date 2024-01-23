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
}

// Function to render habits in the HTML
function renderHabits() {
    habitsContainer.innerHTML = '';

    habits.forEach((habit, index) => {
        const habitItem = document.createElement('li');
        habitItem.className = 'task-item';

        habitItem.innerHTML = `
            <div class="task-text">${habit.name}: ${habit.count}</div>
            <button title='Increase Habit' class="btn btn-success task-btn" onclick="incrementHabit(${index})">+</button>
            <button title='Decrease Habit' class="btn btn-warning task-btn" onclick="decrementHabit(${index})">-</button>
            <button title='Delete Habit' class="btn btn-danger task-btn" onclick="deleteHabit(${index})">x</button>
        `;

        habitsContainer.appendChild(habitItem);
    });
}

// Function to update the habits chart
function updateChart() {
    const ctx = habitsChartCanvas.getContext('2d');

    // Check if a chart instance already exists
    if (window.myHabitsChart) {
        window.myHabitsChart.destroy();
    }

    const labels = habits.map(habit => habit.name);
    const data = habits.map(habit => habit.count);

    // Generate an array of random colors for each bar
    // const randomColors = Array.from({ length: habits.length }, () => getRandomColor());

    window.myHabitsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Habit Count',
                data: data,
                backgroundColor: 'rgba(110, 74, 218, .75)',
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

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to save habits to local storage
function saveHabitsToLocalStorage() {
    localStorage.setItem('habits', JSON.stringify(habits));
}

// Event listener for adding a new habit
document.getElementById('addHabitBtn').addEventListener('click', addHabit);
