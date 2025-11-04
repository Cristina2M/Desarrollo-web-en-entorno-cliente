import { Linea } from "./linea.js"

class Factura {
    constructor (numero, fecha, nombre_cliente, subtotal, iva, lineas){
        this.numero = numero;
        this.fecha = fecha;
        this.nombre_cliente = nombre_cliente;
        this.subtotal = subtotal;
        this.iva = iva;
        this.lineas = lineas;
    }
    setNumero(num){
        this.numero = num;
    }
    setFecha(fech){
        this.fecha = fech;
    }
    getNumero(num){
        return this.numero == num;
    }
    getFecha(fech){
        return this.fecha == fech;
    }
    sumaLineas(){
        let total=0;
        for (let i = 0; i < this.lineas.length; i++) {
            total += this.lineas[i].precio;;
        }
        this.subtotal=total;
        return total;
    }
    getTotal(){
        return this.subtotal * this.iva;
    }
    show(){
        console.log("Número: ", this.numero,"Fecha: ", this.fecha, "Nombre Cliente: ", this.nombre_cliente, "Subtotal: ", this.subtotal, "IVA: ", this.iva, "Lineas: ", this.lineas);
    }

}

export { Factura };