const burgerButton = document.querySelector(".nav_toggler");//On vient récupérer le bouton du burger menu
const navigation = document.querySelector("nav");//egalement l'élément nav
const section = document.querySelector("section");//egalement l'élément section


//Au click sur le bouton, on vient déclencher la fonction callback toggleNav
burgerButton.addEventListener("click",toggleNav);

//Au click à l'extérieur de du menu une fois ouvert, on vient déclencher la fonction callback toggleNavIfOpen
section.addEventListener("click",toggleNavIfOpen);

//on définit la fonction toggleNav
//toggle permet d'ajouter la classe si pas présente, l'enlever si déjà présente
function toggleNav(){
    burgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
};


//Permet de fermer le menu en cliquant à l'extérieur
function toggleNavIfOpen(event){
    if ((!navigation.contains(event.target))&&(navigation.classList.contains("active"))) {
        burgerButton.classList.toggle("active");
        navigation.classList.toggle("active");
    }
};