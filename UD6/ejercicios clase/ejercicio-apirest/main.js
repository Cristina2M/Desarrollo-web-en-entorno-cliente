function CargaDatos(){
    var xhttp = new XMLHttpRequest();

    //cada vez que cambia de estado (0,1,2,3,4)
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('contenedorDatos').innerHTML = this.responseText
        }
        console.log('ReadyState'+this.readyState, "-", this.status)
    }
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send()
}


function CargaDatosOnLoad(){
    var xhttp = new XMLHttpRequest();

    //no comprueba los diferentes estados, lo hace directamente cuando dé como respuesta 4 y 200
    xhttp.onload = function () {
            document.getElementById('contenedorDatos').innerHTML = this.responseText
    }
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send()
}


function CargaDatosOnLoadFormateaDatos(){
    var xhttp = new XMLHttpRequest();

    //no comprueba los diferentes estados, lo hace directamente cuando dé como respuesta 4 y 200
    xhttp.onload = function () {
        let arDatos=JSON.parse(this.responseText);
        console.log(arDatos);
        FormateaDatos(arDatos);
    }
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send()
}

function FormateaDatos (arDatos){
    const contenedor = document.getElementById('contenedorDatos'); 
        for (let i = 0; i < arDatos.length; i++) {
            const nuevoParrafo = document.createElement('p');
            nuevoParrafo.style.whiteSpace = "pre-line"; //para que detecte los \n
            nuevoParrafo.textContent = "Id: "+arDatos[i].id+"\nTítulo: "+arDatos[i].title+"\nPrecio: "+arDatos[i].price;
            
            contenedor.appendChild(nuevoParrafo);
        }
}



const mainU6_1=()=>{
    console.log('cargando script main U6_1');
    document.getElementById('cargaDatos').addEventListener('click', CargaDatosOnLoadFormateaDatos);
}



document.addEventListener('DOMContentLoaded', mainU6_1); //esto se hace siempre