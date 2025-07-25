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
    Cookies.set('htmlemoji.mode', 'dark', { expires: 7 });
    useDark = false;
  } else {
    style.href = "assets/style/light.min.css";
    toggleBtn.innerHTML = '🌙';
    toggleBtn.title = 'Turn lights off';
    themeColor.content = '#efefef';
    Cookies.set('htmlemoji.mode', 'light', { expires: 7 });
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
  var useMode = Cookies.get('htmlemoji.mode');

  if (useMode == 'light') {
    useDark = false;
  } if (useMode == 'dark') {
    useDark = true;
  }
  styleSetup();
});
