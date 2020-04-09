var open = document.getElementById('hamburger');
var changeIcon = true;
var dropdownToggle = document.getElementById('dropdown-toggle');
var myDropdown = document.getElementById('myDropdown');

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});

//open close dropdown
dropdownToggle.addEventListener('click', (e) =>{
    e.preventDefault();
    myDropdown.classList.toggle('show-dropdown');
});