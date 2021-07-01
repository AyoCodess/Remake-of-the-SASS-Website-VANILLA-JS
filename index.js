const toggleSwitch = document.getElementById(`toggle-icon`);

toggleSwitch.addEventListener(`click`, toggleTheme);

function toggleTheme(e) {
  console.log(e.target);

  const button = document.querySelector(`.theme-btn`);
  const buttonBg = document.querySelector(`.theme-btn-bg`);

  if (button.innerHTML === `<i class="fas fa-moon"></i>`) {
    button.innerHTML = `<i class="fas fa-sun"></i>`;
    buttonBg.style.background = `linear-gradient(to right, #f4c4f3, #fc67fa)`;
    document.documentElement.setAttribute(`data-theme`, `dark`);
  } else {
    button.innerHTML = `<i class="fas fa-moon"></i>`;
    buttonBg.style.background = `linear-gradient(to right, #2c5364, #203a43, #0f2027)`;
    document.documentElement.removeAttribute(`data-theme`, `dark`);
  }
}
