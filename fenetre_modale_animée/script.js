/*
On va travailler ici avec visibility car
display block et none ne peuvent pas être animé
*/

const modalContainer = document.querySelector(".modal_container");
const modalTriggers = document.querySelectorAll(".modal_trigger");//retourne une nodelist

console.log(modalTriggers);
//au click sur chaque élément trigger, cela déclenche la fonction toggleModal
modalTriggers.forEach(forEachtrigger);

/* 
Modele avec fonction fléchée
modalTriggers.forEach(trigger => trigger.addEventListener("click";toggleModal));
*/

//Model avec fonction décomposée
function forEachtrigger(trigger){
    trigger.addEventListener("click",toggleModal)
}
//toggle la classe active au click
function toggleModal(){
    modalContainer.classList.toggle("active");
};