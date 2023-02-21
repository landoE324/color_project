const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const burgerButton = document.getElementById('sandwich');
const body = document.body;

darkButton.onclick = () => {
body.classList.remove('light');
body.classList.remove('sandwich');
body.classList.add('dark');
};


lightButton.onclick = () => {
    body.classList.remove('dark');
    body.classList.remove('sandwich');
    body.classList.add('light');
};


burgerButton.onclick = () => {
    body.classList.remove('light');
    body.classList.remove('dark');
    body.classList.add('sandwich');
}