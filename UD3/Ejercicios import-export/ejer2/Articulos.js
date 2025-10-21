import { Articulo } from "./Articulo.js"

class Articulos {
        constructor(arArticulo) {
        this.listaArticulos=arArticulo
    }

    //True si existe el articulo con el codigo indicado, false si no existe
    existeArticulo(codigo){
        if (this.listaArticulos.find(art => art.codigo === codigo)===undefined){
            return false
        } return true
    }

    //devuelve un array con los articulos superiores a un precioMinimo
    filtraPorPrecio(precioMinimo){
            let filtro = this.listaArticulos.filter(articulo => articulo.precio>precioMinimo)
            return filtro
    }

    //filtra usando una función como valor
    filtra(funcion){
        return this.listaArticulos.filter(funcion)
    }

    //Añade un articulo
    addArticulo(articulo){
        this.listaArticulos.push(articulo);
    }

    //Elimina un artículo usando su codigo
    removeArticulo(cod){
        return this.listaArticulos.splice((this.listaArticulos.findIndex(({codigo}) => codigo===cod)), 1)
    }

}

export {Articulos}
