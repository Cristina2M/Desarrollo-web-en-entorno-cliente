
function estiloPadre(padre) {
    padre.style.display = "flex";
    padre.style.flexWrap = "wrap";
    padre.style.gap = "20px";
    padre.style.padding = "20px";
    padre.style.width = '1300px';
    padre.style.margin = '0px auto';

    padre.innerHTML = '';
}

function estilos(div, parrafo, imagen) {
    div.style.border = "1px solid black";
    div.style.borderRadius = "10px";
    div.style.width = "200px";
    div.style.padding = "15px";
    div.style.backgroundColor = "#f9f9f9";


    parrafo.style.whiteSpace = "pre-line";
    parrafo.style.fontSize = "1.1em";

    imagen.style.width = '200px';
    imagen.style.height = 'auto';

}




const devuelvePersonajes = async () => {
    const url = 'https://futuramaapi.com/api/characters'

    const characters = await fetch(url).then((datos) => datos.json());
    console.log('characters', characters);
    generaCards(characters.items);
}

function generaCards(arDatos) {
    const padre = document.getElementById('container');
    estiloPadre(padre);
    for (let i = 0; i < arDatos.length; i++) {
        let div = card(arDatos[i]);
        padre.appendChild(div);
    }

}


function card(objeto) {
    let div = document.createElement('div');
    let parrafo = document.createElement('p');


    parrafo.textContent = `Id: ${objeto.id}\nNombre: ${objeto.name}\nGénero: ${objeto.gender}`;

    let imagen = document.createElement('img');
    if (objeto.image) {
        imagen.src = objeto.image;
    } else {
        imagen.alt = 'No hay imagen';
    }


    estilos(div, parrafo, imagen);
    div.addEventListener('click', () => {
        mostrarDetallePersonaje(objeto);
    });

    div.appendChild(imagen);
    div.appendChild(parrafo);
    return div
}

function main() {
    console.log('Estas en el main')

    devuelvePersonajes();
}

document.addEventListener('DOMContentLoaded', main)

