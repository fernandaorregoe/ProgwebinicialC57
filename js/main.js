let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 0; // Modifica el contador si es necesario, podría ser 0 o 1 dependiendo del desplazamiento inicial
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function () {
    width = sliderIndividual[0].clientWidth;
});

setInterval(function () {
    slides();
}, intervalo);

function slides() {
    if (contador < sliderIndividual.length - 1) {
        slider.style.transform = "translate(" + (-width * contador) + "px)";
    } else {
        setTimeout(function () {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 0;
            setTimeout(function () {
                slider.style.transition = "transform 0.8s ease-in-out";
            }, 50);
        }, 1500);
    }
    contador++;
}