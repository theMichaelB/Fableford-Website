// Get the theme toggle input
const themeToggle = document.querySelector('#checkbox');

// Function to set a theme
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
}

// Function to toggle between light and dark themes
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
        themeToggle.checked = false;
    } else {
        setTheme('dark');
        themeToggle.checked = true;
    }
}

// Immediately invoked function to set the theme on initial load
(function() {
    // Check for saved theme preference or use the system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme)) {
        setTheme('dark');
        themeToggle.checked = true;
    } else {
        setTheme('light');
        themeToggle.checked = false;
    }
})();

// Add an event listener for the toggle
themeToggle.addEventListener('change', toggleTheme);