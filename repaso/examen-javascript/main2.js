import { datosApi } from "./funciones.js"

// Clase Carrito
class Carrito {
    constructor() {
        this.articulos = []; // Array con los artículos (objetos producto completos o solo títulos, usaremos objetos para más detalle)
    }

    add(producto) {
        const existe = this.articulos.find(p => p.id === producto.id);
        if (existe) {
            existe.cantidad++;
        } else {
            // Uso una copia para no modificar el objeto original del listado
            const nuevoProducto = { ...producto, cantidad: 1 };
            this.articulos.push(nuevoProducto);
        }
        this.dibujaCarrito();
    }

    dibujaCarrito() {
        const divCarrito = document.getElementById('car');
        divCarrito.innerHTML = '';

        if (this.articulos.length === 0) {
            return;
        }

        const fragment = document.createDocumentFragment();

        const h2 = document.createElement('h2');
        const totalProductos = this.articulos.reduce((acc, curr) => acc + curr.cantidad, 0);
        h2.textContent = `Carrito (${this.articulos.length} productos distintos, ${totalProductos} productos en total)`;
        fragment.appendChild(h2);

        this.articulos.forEach((producto) => {
            const p = document.createElement('p');
            p.textContent = `${producto.cantidad} x ${producto.title} - ${producto.price}€`;
            fragment.appendChild(p);
        });

        divCarrito.appendChild(fragment);
        return divCarrito;
    }
}

// Instancia global del carrito
const miCarrito = new Carrito();


// ------------- FUNCIONES QUE CREAN LAS CARDS DE LOS PRODUCTOS ------------------------
function CreaCards(arProductos) {
    const padre = document.getElementById('contenedor');
    padre.innerHTML = ''; // Para limpiar el contenedor
    for (let i = 0; i < arProductos.length; i++) {
        const card = CreaCard(arProductos[i]);
        padre.appendChild(card);
    }
}


function CreaCard(objProducto) {
    const div = document.createElement('div');
    div.style.border = '1px solid black';
    div.style.margin = '10px';
    div.style.padding = '10px';
    div.style.width = '300px';
    div.style.display = 'inline-block';
    div.style.verticalAlign = 'top';

    const img = document.createElement('img');
    img.src = objProducto.image;
    img.style.width = '100px';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.style.cursor = 'pointer';

    // Añadir al carrito al hacer click en la imagen
    img.addEventListener('click', () => {
        miCarrito.add(objProducto);
    });

    const titulo = document.createElement('h4');
    titulo.textContent = objProducto.title;

    const precio = document.createElement('p');
    precio.textContent = `Precio: ${objProducto.price}€`;

    const categoria = document.createElement('p');
    categoria.textContent = `Categoría: ${objProducto.category}`;

    const rating = document.createElement('p');
    rating.textContent = `Rate: ${objProducto.rating.rate} (Count: ${objProducto.rating.count})`;

    const descripcion = document.createElement('p');
    descripcion.style.fontSize = '0.8em';
    descripcion.textContent = objProducto.description.substring(0, 100) + '...';

    div.appendChild(img);
    div.appendChild(titulo);
    div.appendChild(precio);
    div.appendChild(categoria);
    div.appendChild(rating);
    div.appendChild(descripcion);

    return div; 
}
// -------------------------------------------------------------------------------------------


// Filtra(objFiltro): Devolverá un array de productos según las condiciones
function Filtra(objFiltro, arProductosBase) {
    const atributo = objFiltro.atributo;
    const valor = parseFloat(objFiltro.valor);

    if (isNaN(valor)) return arProductosBase; // Si no hay valor válido, se devuelven todos los productos

    return arProductosBase.filter(producto => {
        if (atributo === 'price') {
            return producto.price < valor;
        } else if (atributo === 'rate') {
            return producto.rating.rate < valor;
        } else if (atributo === 'count') {
            return producto.rating.count < valor;
        }
        return true;
    });
}


function DevuelveGeneros(arObjBDProductos) {
    const categorias = new Set(); //en los set no se pueden repetir valores

    for (const producto of arObjBDProductos) {
        categorias.add(producto.category);
    }

    return [...categorias]; //para convertir el set en un array
}






function main() {
    // Comprobar sesión
    const usuarioLogueado = localStorage.getItem('Usuario');
    if (!usuarioLogueado) {
        window.location.href = 'examenLogin.html';
        return;
    }

    console.log('Usuario logueado:', JSON.parse(usuarioLogueado));

    // Cargar productos
    datosApi('https://fakestoreapi.com/products').then(arProductos => {
        // Inicializar vista
        CreaCards(arProductos);

        console.log("Categorías disponibles:", DevuelveGeneros(arProductos));

        // Configurar filtro
        const btnFiltrar = document.getElementById('btnFiltrar');
        btnFiltrar.addEventListener('click', () => {
            const atributo = document.getElementById('filtroAtributo').value;
            const valor = document.getElementById('filtroValor').value;

            const objFiltro = { atributo, valor };
            const productosFiltrados = Filtra(objFiltro, arProductos);
            CreaCards(productosFiltrados);
        });
    });
}

document.addEventListener('DOMContentLoaded', main);
