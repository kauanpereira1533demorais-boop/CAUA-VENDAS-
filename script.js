
// Rolagem suave dos links

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute("href"));

        if(alvo){
            alvo.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Header ao rolar a página

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.style.background = "rgba(0,0,0,.95)";
    }else{
        header.style.background = "rgba(0,0,0,.75)";
    }

});