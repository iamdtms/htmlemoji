var toggleBtn = document.querySelector(".btn-toggle");
var themeColor = document.querySelector('[name=theme-color]');
var style = document.getElementById('theme');
var useDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
var mainContainer = document.getElementsByClassName('main-container');

function styleSetup() {
  if (useDark) {
    style.href = "assets/style/dark.min.css";
    toggleBtn.innerHTML = '☀️'
    toggleBtn.title = 'Turn lights on';
    themeColor.content = '#0a0a0a';
    useDark = false;
  } else {
    style.href = "assets/style/light.min.css";
    toggleBtn.innerHTML = '🌙';
    toggleBtn.title = 'Turn lights off';
    themeColor.content = '#3c8cd1';
    useDark = true;
  }
}

window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', () => {
    styleSetup();
  });

toggleBtn.addEventListener("click", function (event) {
  styleSetup();
  event.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  styleSetup();
});
