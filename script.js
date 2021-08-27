const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const darkTheme = "dark";
const lightTheme = "light";

function toggleDarkLightMode(theme) {
  nav.style.backgroundColor = theme === darkTheme ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor =
    theme === darkTheme ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = theme === darkTheme ? "Dark Mode" : "Light Mode";
  theme === darkTheme
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  theme === darkTheme ? imageMode(darkTheme) : imageMode(lightTheme);
}

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.currentTarget.checked) {
    document.documentElement.setAttribute("data-theme", darkTheme);
    localStorage.setItem("theme", darkTheme);
    toggleDarkLightMode(darkTheme);
  } else {
    document.documentElement.setAttribute("data-theme", lightTheme);
    localStorage.setItem("theme", lightTheme);
    toggleDarkLightMode(lightTheme);
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === darkTheme) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(lightTheme);
  }
}
