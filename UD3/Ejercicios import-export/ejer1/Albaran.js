import { Cliente } from "./Cliente.js"
import { Articulo } from "./Articulo.js"

class Albaran {
    constructor(cliente, numeroAlb, fecha, lineas) {
        this.cliente = cliente,
            this.numeroAlb = numeroAlb,
            this.fecha = fecha,
            this.lineas = lineas
    }
    show() {
        console.log("Cliente: " + this.cliente.nombre + " Número de albarán: " + this.numeroAlb + " Fecha: " + this.fecha + " Artículo1: " + this.lineas[0].nombre + " Artículo2: " + this.lineas[1].nombre)
    }
    addArticulo(articulo) {
        this.lineas.push(articulo);
    }
    get total() {
        let ptotal = 0;
        for (let i = 0; i < this.lineas.length; i++) {
            ptotal += this.lineas[i].pvp;
            return ptotal
        }
    }
    
}



export { Albaran };

