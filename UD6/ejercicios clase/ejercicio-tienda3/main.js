// ---------FUNCIONES QUE AÑADEN ESTILOS (Sin cambios significativos) -------------
function FormateaPadre(padre) {
    padre.style.display = "flex";
    padre.style.flexWrap = "wrap";
    padre.style.gap = "20px";
    padre.style.padding = "20px";
    padre.style.width = '1000px';

    padre.innerHTML = '';
}

function FormateaDiv(div) {
    div.style.border = "1px solid black";
    div.style.borderRadius = "10px";
    div.style.width = "200px";
    div.style.padding = "15px";
    div.style.backgroundColor = "#f9f9f9";
}

function FormateaParrafo(parrafo) {
    parrafo.style.whiteSpace = "pre-line";
    parrafo.style.fontSize = "1.1em";
}

function FormateaImagen(imagen) {
    imagen.style.width = '100px';
    imagen.style.height = 'auto';
}

function FormateaDetalleContenedor(contenedor) {
    contenedor.style.position = 'fixed';
    contenedor.style.right = '0';
    contenedor.style.top = '0';
    contenedor.style.width = '500px';
    contenedor.style.height = '100%';
    contenedor.style.zIndex = '1000';
    contenedor.style.backgroundColor = '#f4f4f4';
    contenedor.style.borderLeft = '1px solid #ccc';
    contenedor.style.boxShadow = '-4px 0 8px rgba(0, 0, 0, 0.1)';
    contenedor.style.overflowY = 'auto';
    contenedor.style.display = 'block';

    contenedor.innerHTML = '';
}

function FormateaCerrar(cerrar) {
    cerrar.textContent = 'X';
    cerrar.style.float = 'right';
    cerrar.style.cursor = 'pointer';
    cerrar.style.border = 'none';
    cerrar.style.backgroundColor = 'transparent';
}
// --------------------------------------------------------------------------

let db = [];

function obtenerProductos() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(productos => {
            db = productos;
            categorias();
            mostrarProductos(db);
        })
        .catch(error => console.log('Error: ', error))

}


function mostrarProductos(productosArray) {
    FormateaDatos(productosArray);
}


function FormateaDatos(productosArray) {
    const padre = document.getElementById("contenedor");
    FormateaPadre(padre);
    for (let i = 0; i < productosArray.length; i++) {
        const producto = productosArray[i];

        let nuevoDiv = document.createElement('div');
        FormateaDiv(nuevoDiv);
        nuevoDiv.addEventListener('click', () => {
            mostrarDetalleProducto(producto.id);
        });

        let nuevoParrafo = document.createElement('p');
        FormateaParrafo(nuevoParrafo);
        nuevoParrafo.textContent = `Id: ${producto.id}\nNombre: ${producto.title}\nPrecio: ${producto.price}€`;

        let nuevaImagen = document.createElement('img');
        nuevaImagen.src = producto.image;
        FormateaImagen(nuevaImagen);

        nuevoDiv.appendChild(nuevaImagen);
        nuevoDiv.appendChild(nuevoParrafo);

        padre.appendChild(nuevoDiv);
    }
}





function cerrarDetalle() {
    const detalleContenedor = document.getElementById("detalleProducto");

    detalleContenedor.style.display = 'none';
    detalleContenedor.innerHTML = '';
}


// llamada a la api por el id del producto
function llamadaPorId(div, idProducto, botonCerrar){
    const urlDetalle = `https://fakestoreapi.com/products/${idProducto}`;
    fetch(urlDetalle)
        .then(res => res.json())
        .then(producto => {
            div.innerHTML = `
                <h2>${producto.title}</h2>
                <img src="${producto.image}" alt="${producto.title}" style="max-width: 150px; display: block; margin-bottom: 10px;">
                <p><strong>ID:</strong> ${producto.id}</p>
                <p><strong>Categoría:</strong> ${producto.category}</p>
                <p><strong>Descripción:</strong> ${producto.description}</p>
                <p><strong>Precio:</strong> ${producto.price}€</p>
            `;
            div.insertBefore(botonCerrar, div.firstChild);
        })
        .catch(error => console.log('Error: ', error));
}



function mostrarDetalleProducto(idProducto) {
    const detalleContenedor = document.getElementById("detalleProducto");
    FormateaDetalleContenedor(detalleContenedor);
    const productos = document.getElementById("contenedor");
    productos.style.width = '1000px';

    const detalleDiv = document.createElement('div');
    detalleDiv.style.padding = "20px";

    const botonCerrar = document.createElement('button');
    FormateaCerrar(botonCerrar);


    botonCerrar.addEventListener('click', cerrarDetalle);



    llamadaPorId(detalleDiv, idProducto, botonCerrar);

    detalleContenedor.appendChild(detalleDiv);
}




function categorias() {
    const padre = document.getElementById("listaCategorias");

    padre.innerHTML = '';

    const categoriasSinRepetir = new Set();
    categoriasSinRepetir.add("Todos");
    for (let i = 0; i < db.length; i++) {
        categoriasSinRepetir.add(db[i].category);
    }

    const selectDesplegable = document.createElement('select');
    selectDesplegable.id = 'filtroCategoria';
    selectDesplegable.name = 'categoriaSeleccionada';

    selectDesplegable.addEventListener('change', filtrarCategoria);

    categoriasSinRepetir.forEach(categoria => {
        let nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = categoria;
        nuevaOpcion.textContent = categoria;

        if (categoria === "Todos") {
            nuevaOpcion.selected = true;
        }

        selectDesplegable.appendChild(nuevaOpcion);
    });

    padre.appendChild(selectDesplegable);
}




function filtrarCategoria() {
    const selectDesplegable = document.getElementById("filtroCategoria");
    const categoriaSeleccionada = selectDesplegable.value;

    let productosFiltrados;

    if (categoriaSeleccionada === "Todos") {
        productosFiltrados = db;
    } else {
        productosFiltrados = db.filter(producto => {
            return producto.category === categoriaSeleccionada;
        });
    }

    mostrarProductos(productosFiltrados);
}









document.addEventListener('DOMContentLoaded', () => {

    obtenerProductos();

});