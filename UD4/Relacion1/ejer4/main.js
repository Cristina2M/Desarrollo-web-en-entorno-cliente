const Dibujar = () => {
    let divPadre = document.getElementById("contenedor");
    let divHijos = divPadre.getElementsByTagName("div");

    for (let i = 0; i < divHijos.length; i++) {
        const divHijo = divHijos[i];
        
        divHijo.addEventListener("mousemove", (event) => {
        if (event.ctrlKey) {
            divHijo.style.backgroundColor = 'red';
        };
        if (event.shiftKey) {
            divHijo.style.backgroundColor = 'blue';
        };
    })
    }
}


(function () {
    Dibujar();
})();