// para añadirles el atributo data-row a los div que indica la posición en la pizarra
const IniciarCuadricula = () => {
    let divPadre = document.getElementById("contenedor");
    if (!divPadre) return;
    let divHijos = divPadre.getElementsByTagName("div");
    
    for (let i = 0; i < divHijos.length; i++) {
        const row = Math.floor(i / 50) + 1; 
        
        divHijos[i].setAttribute('data-row', row);
    }
}


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



const BorrarLinea = () => {
    let divPadre = document.getElementById("contenedor");
    let divHijos = divPadre.getElementsByTagName("div");

    for (let i = 0; i < divHijos.length; i++) {
        const divHijo = divHijos[i];
        
        divHijo.addEventListener("click", (event) => {
            if (event.altKey) {
                const filaPulsada = divHijo.getAttribute('data-row');

                for (let j = 0; j < divHijos.length; j++) {
                    const divActual = divHijos[j];
                    
                    if (divActual.getAttribute('data-row') === filaPulsada) {
                        divActual.style.backgroundColor = '#f0f8ff';
                    }
                }
            }
        });
    }
}



const BorrarTodo = () => {
        let divPadre = document.getElementById("contenedor");
        let divHijos = divPadre.getElementsByTagName("div");
        let btn1 = document.getElementById("btn1");

        btn1.addEventListener("click", (event) => {
            for (let i = 0; i < divHijos.length; i++) {
            const divHijo = divHijos[i];
            divHijo.style.backgroundColor = '#f0f8ff';
    }
    })
}


(function () {
    IniciarCuadricula();
    Dibujar();
    BorrarLinea();
    BorrarTodo();
})();