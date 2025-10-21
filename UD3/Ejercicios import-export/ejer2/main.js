import { Articulo } from "./Articulo.js"
import  { Articulos } from "./Articulos.js"

let dbDatosArticulos=[]
let dbArt;


let fInit=() => {
    let art1=new Articulo(1, "Camiseta", 10);
    let art2=new Articulo(2, "Pantalón", 15);
    let art3=new Articulo(3, "Zapatillas", 20);

    dbArt=new Articulos([art1,art2,art3, new Articulo(4, "Chaqueta", 30)]);

    dbDatosArticulos.push(art1,art2,art3);
    console.log("Datos de artículos inicializados");
}



(function(){
    console.log("Cargando main.js");
    fInit()
    console.log("dbArtículos: ", dbDatosArticulos)
    //filtrar los articulos
    let articulosFiltrados=dbDatosArticulos.filter(articulo => articulo.precio>15) //OJO!! valor=objetos, return seleccionar la parte del objeto y la condición
    let articulosFiltrados2=dbDatosArticulos.filter(({precio}) => precio>15)  //OTRA FORMA DE HACERLO con destructuración
    console.log ("articulosFiltrado:", articulosFiltrados)
    console.log ("articulosFiltrado2:", articulosFiltrados2)

    let valoresFiltrados=[4,5,6].filter( valor => valor>5)
    console.log ("ValoresFiltrados:", valoresFiltrados)


    dbArt.existeArticulo(2)?console.log("El artiruclo con código 2 EXISTE"):console.log("El articulo NO existe")


    console.log(dbArt.filtraPorPrecio(20))


    console.log("filtra",dbArt.filtra(({codigo})=>codigo<3))

    console.log("Elimina", dbArt.removeArticulo(3))
    console.log("Array con elemento eliminado", dbArt)

})();