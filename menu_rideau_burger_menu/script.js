const burgerButton = document.querySelector(".nav_toggler");
const navigation = document.querySelector(".nav");

burgerButton.addEventListener("click",toggleNav);

function toggleNav(){
    burgerButton.classList.toggle("active")
};