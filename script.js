const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const burgerButton = document.getElementById('sandwich');
const body = document.body;

darkButton.onclick = () => {
body.classList.remove('light');
body.classList.remove('sandwich');
body.classList.add('dark');
localStorage.setItem('theme', 'dark');
};


lightButton.onclick = () => {
    body.classList.remove('dark');
    body.classList.remove('sandwich');
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
};


burgerButton.onclick = () => {
    body.classList.remove('light');
    body.classList.remove('dark');
    body.classList.add('sandwich');
    localStorage.setItem('theme', 'sandwich');
}

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
}