const toggleSwitch = document.getElementById(`toggle-icon`);
const button = document.querySelector(`.theme-btn`);
const buttonBg = document.querySelector(`.theme-btn-bg`);

function lightMode() {
  buttonBg.style.background = `linear-gradient(to right, #f4c4f3, #fc67fa)`;
  localStorage.setItem(`theme`, `dark`);
}

function darkMode() {
  buttonBg.style.background = `linear-gradient(to right, #2c5364, #203a43, #0f2027)`;
  localStorage.setItem(`theme`, `light`);
}

toggleSwitch.addEventListener(`click`, toggleTheme);

function toggleTheme(e) {
  if (button.innerHTML === `<i class="fas fa-moon"></i>`) {
    document.documentElement.setAttribute(`data-theme`, `dark`);
    button.innerHTML = `<i class="fas fa-sun"></i>`;
    lightMode();
  } else {
    document.documentElement.removeAttribute(`data-theme`, `light`);
    button.innerHTML = `<i class="fas fa-moon"></i>`;
    darkMode();
  }
}

//? check local storage for theme

const currentTheme = localStorage.getItem(`theme`);

if (currentTheme) {
  document.documentElement.setAttribute(`data-theme`, currentTheme);
}

//? icon is not directly linked to theme, so needs to be changed manually

if (document.documentElement.dataset.theme === "dark") {
  button.innerHTML = `<i class="fas fa-sun"></i>`;
  lightMode();
}
