import db from "./db.json" with {type: "json"}; // Para importar la base de datos



function mostrarProductos(productosArray) {
    const padre = document.getElementById("contenedor");

    padre.style.display = "flex";
    padre.style.flexWrap = "wrap";
    padre.style.gap = "20px";
    padre.style.padding = "20px";
    padre.style.width = '1000px';

    padre.innerHTML = ''; 

    for (let i = 0; i < productosArray.length; i++) {
        const producto = productosArray[i];

        let nuevoDiv = document.createElement('div');

        nuevoDiv.style.border = "1px solid black";
        nuevoDiv.style.borderRadius = "10px";
        nuevoDiv.style.width = "200px";
        nuevoDiv.style.padding = "15px";
        nuevoDiv.style.backgroundColor = "#f9f9f9";
        
        nuevoDiv.addEventListener('click', () => {
            mostrarDetalleProducto(producto);
        });

        let nuevoParrafo = document.createElement('p');
        nuevoParrafo.style.whiteSpace = "pre-line";
        nuevoParrafo.textContent = `Id: ${producto.id}\nNombre: ${producto.title}\nPrecio: ${producto.price}€`;
        nuevoParrafo.style.fontSize = "1.1em";

        let nuevaImagen = document.createElement('img');
        nuevaImagen.src = producto.image;
        nuevaImagen.style.width = '100px';
        nuevaImagen.style.height = 'auto';

        nuevoDiv.appendChild(nuevaImagen);
        nuevoDiv.appendChild(nuevoParrafo);
        
        padre.appendChild(nuevoDiv);
    }
}


function cerrarDetalle() {
    const detalleContenedor = document.getElementById("detalleProducto"); 
    
    if (detalleContenedor) {
        detalleContenedor.style.display = 'none';
        detalleContenedor.innerHTML = '';
    }
}


function mostrarDetalleProducto(producto) {
    const detalleContenedor = document.getElementById("detalleProducto");
    const productos = document.getElementById("contenedor");
    productos.style.width = '1000px';
    
    detalleContenedor.style.position = 'fixed'; 
    detalleContenedor.style.right = '0';
    detalleContenedor.style.top = '0';
    detalleContenedor.style.width = '500px';
    detalleContenedor.style.height = '100%';
    detalleContenedor.style.zIndex = '1000';
    detalleContenedor.style.backgroundColor = '#f4f4f4';
    detalleContenedor.style.borderLeft = '1px solid #ccc';
    detalleContenedor.style.boxShadow = '-4px 0 8px rgba(0, 0, 0, 0.1)';
    detalleContenedor.style.overflowY = 'auto';

    detalleContenedor.innerHTML = ''; 

    const detalleDiv = document.createElement('div');
    detalleDiv.style.padding = "20px";

    const botonCerrar = document.createElement('button');
    botonCerrar.textContent = 'X';
    botonCerrar.style.float = 'right';
    botonCerrar.style.cursor = 'pointer';
    botonCerrar.style.border = 'none';
    botonCerrar.style.backgroundColor = 'transparent';

    botonCerrar.addEventListener('click', cerrarDetalle);

    detalleDiv.innerHTML = `
        <h2>${producto.title}</h2>
        <img src="${producto.image}" alt="${producto.title}" style="max-width: 150px; display: block; margin-bottom: 10px;">
        <p><strong>ID:</strong> ${producto.id}</p>
        <p><strong>Categoría:</strong> ${producto.category}</p>
        <p><strong>Descripción:</strong> ${producto.description}</p>
        <p><strong>Precio:</strong> ${producto.price}€</p>
    `;
    
    detalleDiv.insertBefore(botonCerrar, detalleDiv.firstChild);

    detalleContenedor.appendChild(detalleDiv);
    
    detalleContenedor.style.display = 'block';
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
    filtrarCategoria();
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
    categorias();
});