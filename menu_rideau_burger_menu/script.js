const burgerButton = document.querySelector(".nav_toggler");//On vient récupérer le bouton du burger menu
const navigation = document.querySelector("nav");//egalement l'élément nav

//Au click sur le bouton, on vient déclencher la fonction callback toggleNav
burgerButton.addEventListener("click",toggleNav);

//on définit la fonction toggleNav
//toggle permet d'ajouter la classe si pas présente, l'enlever si déjà présente
function toggleNav(){
    burgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
};