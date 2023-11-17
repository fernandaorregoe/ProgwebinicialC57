if (document.querySelector('#container-slider')) {
    setInterval(() => funcionEjecutar('siguiente'), 5000);
}

// ------------------------------ SLIDER -------------------------
if (document.querySelector('.listslider')) {
    let links = document.querySelectorAll(".listslider li a");

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let item = this.getAttribute('itlist');
            let arrItem = item.split("_");
            funcionEjecutar(arrItem[1]);
        });
    });
}

function funcionEjecutar(side) {
    let parentTarget = document.getElementById('slider');
    let elements = document.querySelectorAll('#slider li');
    let curElement = Array.from(elements).findIndex(el => el.style.opacity == 1);
    let siguienteElement;

    if (side == 'anterior' || side == 'siguiente') {
        siguienteElement = (side == "anterior") ? (curElement == 0) ? elements.length - 1 : curElement - 1 : (curElement == elements.length - 1) ? 0 : curElement + 1;
    } else {
        siguienteElement = side;
        side = (curElement > siguienteElement) ? 'anterior' : 'siguiente';
    }

    // PUNTOS INFERIORES
    let elementSel = document.querySelector(".listslider").getElementsByTagName("a");
    elementSel[curElement].classList.remove("item-select-slid");
    elementSel[siguienteElement].classList.add("item-select-slid");
    elements[curElement].style.opacity = 0;
    elements[curElement].style.zIndex = 0;
    elements[siguienteElement].style.opacity = 1;
    elements[siguienteElement].style.zIndex = 1;
}