

class Linea {
    constructor(codigo, descripcion, unidades, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.unidades = unidades;
        this.precio = precio;
    }
    getTotal (){
        return this.unidades * this.precio;
    }
}

export { Linea };