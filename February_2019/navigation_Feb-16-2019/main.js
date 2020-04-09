selector(".menu").addEventListener('click', function() {
    this.classList.toggle('open');
    selector('header').classList.toggle('open');
    selector('.overlay').classList.toggle('open');
});

function selector(s) {
    return document.querySelector(s);
};