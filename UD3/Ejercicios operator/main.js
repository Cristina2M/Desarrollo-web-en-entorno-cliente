

//Para copiar un objeto, cuando se modifica mantiene los atributos pero los valores pueden cambiar SOLO EN UNO
let ejemploSpreadOperatorObjetos=()=>{
    const persona1={nombre:"Ana",edad:25};
    const persona2={...persona1};
    console.log("Persona1: ", persona1);
    console.log("Persona2: ", persona2);
    persona2.nombre="Luis";
    console.log("Persona2 Modificado: ", persona2);
}


//Para COMBINAR dos objetos en UN solo objeto
let ejemploSpreadOperatorCombinarObjetos=()=>{
    const objeto1={nombre:"Pedro",edad:28};
    const objeto2={calle:"Ronda",numero:4};
    console.log("Objeto1: ", objeto1);
    console.log("Objeto2: ", objeto2);
    const objetoCombinado={...objeto1,...objeto2};
    console.log("Objetos Combinados: ", objetoCombinado);
}


//Para convertir String en array tambíen sirve
let palabraConvertidaEnArray=()=>{
    let palabra="Cristina";
    let arPalabra=[...palabra];
    console.log("Mi nombre en un array: ",arPalabra);
}



let expandeArray=()=>{
    const numeros=[1,2,3,4,5];
    console.log("Array original: ", numeros);
    console.log("Array expandido: ", ...numeros); //pasa el array a valores individuales
}




(function() {
    console.log("Esto es main.js");
    expandeArray();

    //PARA COPIAR UN ARRAY EN OTRO Y QUE EL ORIGINAL NO SE MODIFIQUE:
    let arDestino=[];
    let valores=["a","b","c","d"];
    //si hago arDestino=valores, lo que hago es añadirle una REFERENCIA, ambos SERÍAN EL MISMO ARRAY
    arDestino=[...valores];
    console.log("Array copiado: ", arDestino);
    arDestino.push("e", "f");
    console.log("Array copiado modificado: ", arDestino);
    console.log("Array original: ", valores);


    //también sirve para CONCATENAR dos arrays
    let arDestino2=[];
    let arNumeros=[1,2,3,4,5];
    arDestino2=[...valores,...arNumeros];
    console.log("Array concatenado: ", arDestino2);


    //llamada a la funcion de copiar objetos
    ejemploSpreadOperatorObjetos();


    //llamada a la función de combinar objetos
    ejemploSpreadOperatorCombinarObjetos();

    //llamada a la función de pasar un string a array
    palabraConvertidaEnArray();
    

})()