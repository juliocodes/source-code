let body = document.body;
let toggleBtn = document.querySelector('.toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
    body.classList.add('dark-theme');
}

toggleBtn.addEventListener('click', function () {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});