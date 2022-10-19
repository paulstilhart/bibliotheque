//On vient récupérer les bons éléments dans le DOM
const scrollIndicator = document.querySelector(".scroll_indicator");//div scroll_indicator
const content = document.querySelector(".content");//paragraphe content qui peut être un conteneur global

const observer = new IntersectionObserver(handleIntersect);

//quand le content va rentrer dans la fenetre, on lance la fonction handleIntersect
observer.observe(content);

function handleIntersect(entries) {
    const el = entries[0];
    if (el.isIntersecting) {
        window.addEventListener("scroll", indicatorAnimation);
    }
    else if (!el.isIntersecting) {
        window.removeEventListener("scroll", indicatorAnimation);
    }
}

// Fonction animateur de scroll
function indicatorAnimation() {
    if (window.scrollY > content.offsetTop) {
        const percentage = ((window.scrollY - content.offsetTop) / content.scrollHeight * 100).toFixed(2);
        scrollIndicator.style.transform = `scaleX(${(percentage / 100)})`;
    }
    else{
        scrollIndicator.style.transform = "scaleX(0)"
    }
}