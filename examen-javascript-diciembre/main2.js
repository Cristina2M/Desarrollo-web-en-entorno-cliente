import { datosApi } from "./funciones.js"

// ------------- FUNCIONES QUE CREAN LAS CARDS DE LOS PRODUCTOS ------------------------
function CreaCards(arProductos){
    const padre = document.getElementById('contenedor')
    for (let i = 0; i < arProductos.length; i++) {
        CreaCard(arProductos[i], padre)
    }
}


function CreaCard(objProducto, padre){
    const div = document.createElement('div')
    const img = document.createElement('img')
    img.src = objProducto.image;
    img.style.width='100px'
    div.textContent= objProducto.title +' Descripción:'+ objProducto.description +' Precio:' + objProducto.price + ' Categoría:'+objProducto.category + 'Rating: Rate '+objProducto.rating.rate+ ' Count:'+objProducto.rating.count;
    div.appendChild(img);
    div.style.border='1px solid black'
    
    // si me da tiempo le añadiré estilos para que se va mejory más bonito, pero por ahora muestra todos los datos sin problema


    //no entiendo si le estoy añadiendo un evento click porque añade todos los productos cada vez que recargo la página, debo de tener algún fallo muy tonto
    div.addEventListener('click',
         addCarrito(objProducto)
    )
 carritoShow();

    padre.appendChild(div);
    
}
// -------------------------------------------------------------------------------------------



function Filtra(objFiltro){
    const arProductosFiltrados = [];

    const atributo = objFiltro.atributo;
    const valor = objFiltro.valor;

    const productos = datosApi('https://fakestoreapi.com/products')
    productos.then(arProductos=>{
    arProductos.forEach((producto)=>{
        if (producto.price < valor) {
            arProductosFiltrados.push(producto)
        }
    });
})

    return arProductosFiltrados
}


function DevuelveGeneros(arProductos){
    
    const categorias = [];

    arProductos.forEach((producto)=>{
        categorias.push(producto.category)
    })

    return categorias;
}




// ------------------------ FUNCIONES DEL CARRITO ------------------------------

const addCarrito = (producto) => {
    console.log('Añadir al carrito',producto);
    let carrito=JSON.parse(sessionStorage.getItem('Carrito')) || []; 
    carrito.push(producto);
    sessionStorage.setItem('Carrito',JSON.stringify(carrito));
    console.log('Carrito',carrito);
}

const carritoShow = () => {
    // mostrar el contenido de la variable guardada en el sessionStorage
    const carrito=JSON.parse(sessionStorage.getItem('Carrito')) || [];
    
    console.log('Ver carrito',carrito);
    const divCarrito=document.getElementById('car');
    divCarrito.innerHTML='';  
    console.log('car',carrito);
  
    if (carrito.length===0){
       
        return;
    }

    //lo que se ve en la pagina:
    const h2=document.createElement('H2');
    h2.textContent=`Carrito (${carrito.length} productos)`;
    divCarrito.appendChild(h2);

    carrito.forEach((producto)=>{
        const p=document.createElement('p');
        p.textContent=`${producto.title} - ${producto.price}`;
        divCarrito.appendChild(p);
    });
}

// ---------------------------------------------------------------------------

function main () {
    console.log('Estas en el main de los productos')

    const productos = datosApi('https://fakestoreapi.com/products')
    productos.then(arProductos=>{
        CreaCards(arProductos)
        console.log(DevuelveGeneros(arProductos));
    })
    
    const objFiltro={ 'atributo': "price", "valor": 101}
    

    console.log(Filtra(objFiltro))
    
}


document.addEventListener('DOMContentLoaded', main)