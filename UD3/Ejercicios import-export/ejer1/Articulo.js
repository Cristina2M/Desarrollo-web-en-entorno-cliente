class Articulo {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo,
            this.nombre = nombre,
            this.precio = precio
    }
    get pvp() {
        return this.precio * 0.2
    }
}


export { Articulo };



