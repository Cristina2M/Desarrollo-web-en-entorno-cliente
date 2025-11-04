import { Factura } from "./factura.js"
import { Linea } from "./linea.js"



// genera un array de facturas con datos de ejemplo y mostrará la información de las facturas;
function demuestraUso() {
    // Creación de algunas líneas
    const l1 = new Linea(1, "teclado", 2, 10);
    const l2 = new Linea(2, "monitor", 4, 20);
    const l3 = new Linea(3, "ratón", 6, 5);
    const l4 = new Linea(4, "torre", 1, 45);

    // Creacion de algunas facturas
    const f1 = new Factura(1, Date(), "Juan", 0, 5, [l1, l2]);
    const f2 = new Factura(2, Date(), "Paco", 0, 5, [l2, l3]);
    const f3 = new Factura(3, Date(), "Antonio", 0, 5, [l3, l4]);
    f1.sumaLineas();
    f2.sumaLineas();
    f3.sumaLineas();



    f1.show();
    f2.show();
    f3.show();

    const arFacturas = [f1, f2, f3];

    return arFacturas;
}




// Recibe un array de Facturas y devuelve un array de facturas con la factura número num incrementada todas sus líneas con el importe incremento.
function incrementaFactura(arFacturas, num, incremento) {
    const arNuevoFacturas = [...arFacturas];

    for (let i = 0; i < arNuevoFacturas.length; i++) {

        if (arNuevoFacturas[i].numero == num) {

            for (let f = 0; f < arNuevoFacturas[i].lineas.length; f++) {
                let nuevoPrecio = (arNuevoFacturas[i].lineas[f].precio * incremento);
                arNuevoFacturas[i].lineas[f].precio = nuevoPrecio;
            }
        }
    }

    return console.log(arNuevoFacturas);
}




// Recibe un array de Facturas y devolverá un objeto con tres campos numLineas, totalImporte, mediaImporte, codigoArticuloMasVendido 
// que corresponden a número total de líneas, importe total de ventas, importe medio de ventas, codigo del artículo más vendido.
function analizaFacturas(arFacturas) {
    const obj = {
        numLineas: "",
        totalImporte: "",
        mediaImporte: "",
        codigoArticuloMasVendido: ""
    };



    let tLineas = 0;
    let tImporte = 0;
    let tMedia = 0;
    let codigoMasVendido = 0;
    for (let i = 0; i < arFacturas.length; i++) {
        const numeroLineas = arFacturas[i].lineas.length;
        tLineas += numeroLineas;

        const importe = arFacturas[i].subtotal;
        tImporte += importe;

        tMedia = tImporte / tLineas;

        for (let f = 0; f < arFacturas[i].lineas.length; f++) {
            if (arFacturas[i].lineas[f].unidades > arFacturas[i].lineas[f++].unidades) {
                codigoMasVendido = arFacturas[i].lineas[f].unidades
            } else {
                codigoMasVendido = arFacturas[i].lineas[f++].unidades
            }
        }
    }
    obj.numLineas = tLineas;
    obj.totalImporte = tImporte;
    obj.mediaImporte = tMedia;
    obj.codigoArticuloMasVendido = codigoMasVendido

    return obj;
}




// Recibe un array de Facturas y devuelve un array de Facturas donde no se encuentra la factura con número num passado como parámetro.
function eliminaFactura(arFacturas, num) {
    const nuevasFacturas = [...arFacturas];
    for (let i = 0; i < nuevasFacturas.length; i++) {
        if (nuevasFacturas[i].numero == num) {
            nuevasFacturas.splice(i, 1);
        }
    }
    return nuevasFacturas;
}




// Recibe un array de Facturas y devuelve un array de Facturas donde solo se encuentras las facturas que tienen líneas con ese código de producto.
// function encuentraxCodigo(arFacturas, cod) {
//     return arFacturas.lineas.filter({{ codigo }} => {{ codigo }} == cod);        
// }




// Recibe un array de Facturas y devuelve un array de Facturas donde las fecha son >= que fechamin
// function filtraFacturas(arFacturas, fechamin) {
//     return arFacturas.filter({{ fecha }} => {{ fecha }} >= fechamin); 
// }





// devolverá un array de objetos {numero, nombre_cliente, total} donde total será el total de la factura incluido el iva. 
// Se debe implementar con map y destructuración. 
// ( implementar de otra forma, solo en caso de no encontrar la solución con map y destructuring)
function modFacturas(arFacturas) {

}





// Recibe un array de Facturas , y devuelve un array de Facturas ordenadas por número ascendente o descendente, 
// dependiendo del parámetro orden. Si orden es 0 el orden es acendente, si orden es 1 el orden es descendente.
function ordenaFacturas(arFacturas, orden) {
    const nuevoArray = [...arFacturas];
    if (orden == 0) {
        return nuevoArray.sort((a, b) => a - b);
    } else {
        return nuevoArray.sort((a, b) => b - a);
    }
}





// Recibe un array de Facturas y actualiza el array con el objFactura, dos facturas son iguales si tienen el mismo número. 
// La función devuelve -1 si el objFactura no se encuentra en el array de Facturas, 
// y el numero de la factura en caso de que la modificación haya sido correcta
function updateFacturas(arFacturas, objFactura) {

}








//Función autoejecutable
(function () {
    // llamada a la función demuestaUso
    const arFacturas = demuestraUso();



    incrementaFactura(arFacturas, 1, 5);

    // llamada a la funcion analizaFacturas
    console.log("Analiza Facturas: ", analizaFacturas(arFacturas));


    // llamada a la función eliminaFactura
    console.log("Elimina Factura número 2", eliminaFactura(arFacturas, 2));

    // llamada a la función encuentraxCódigo
    // console.log("Encuentra por el codigo de línea 4", encuentraxCodigo(arFacturas, 4));


    // llamada a la función modFacturas
    // console.log("Modifica Facturas: ", modFacturas(arFacturas));



    // llamada a la función ordenaFacturas
    console.log("Ordena facturas", ordenaFacturas(arFacturas, 1));


    // llamada a la función updateFacturas
    // console.log("Actualiza Facturas", updateFacturas(arFacturas, objFactura));

})();