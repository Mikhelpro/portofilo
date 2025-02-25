// Toggle between light and dark theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
  
    if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }
  
  // Set the theme from localStorage on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
  