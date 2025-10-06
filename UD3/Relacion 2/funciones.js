//Actividad 1
function calcularEstadisticas(array) {
    const minimo = Math.min(...array);
    const maximo = Math.max(...array);
    const media = array.reduce((a, b) => a + b, 0) / array.length;
    return { minimo, maximo, media };
}


//Actividad 3
function generarNumerosAleatoriosN(tamañoArray, maxValor) {
    const array = [];
    for (let i = 0; i < tamañoArray; i++) {
        let numero = Math.floor(Math.random() * (maxValor + 1));
        array.push(numero);
    }
    return array;
}


//Actividad 4
function interseccionArrays(arr1, arr2) {
    const resultado = arr1.filter(function (item) {
        return arr2.indexOf(item) !== -1;
    });
    return resultado;
}

function unionArrays(arr1, arr2) {
    const union = arr1.concat(arr2);
    const resultado = [];
    for (let i = 0; i < union.length; i++) {
        if (resultado.indexOf(union[i]) === -1) {
            resultado.push(union[i]);
        }
    }
    return resultado;
}

function diferenciaArrays(arr1, arr2) {
    let resultado = arr1.filter(function (item) {
        return arr2.indexOf(item) === -1;
    });
    return resultado;
}


//Actividad 6
function buscarPalabra() {
    let palabra = prompt("Introduce la palabra o cadena a buscar:").toLowerCase();

    let textoDocumento = document.body.innerText.toLowerCase();


    if (textoDocumento.indexOf(palabra) !== -1) {
        document.getElementById("resultado").textContent =
            'La palabra "' + palabra + '" SÍ se encuentra en el documento.';
    } else {
        document.getElementById("resultado").textContent =
            'La palabra "' + palabra + '" NO se encuentra en el documento.';
    }
}


//Actividad 7
function generarNumerosAleatorios(tamaño) {
    const array = [];
    for (let i = 0; i < tamaño; i++) {
        let numero = Math.floor(Math.random() * 101);
        array.push(numero);
    }
    return array;
}

function eliminarDuplicados(array) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (resultado.indexOf(array[i]) === -1) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}



//Actividad 9
function analizarPalabras(palabras) {
    return {
        numPalabras: palabras.length,
        primera: palabras[0],
        ultima: palabras[palabras.length - 1],
        invertidas: palabras.slice().reverse(), //slice hace una copia del array con la modificacion
        ordenAZ: palabras.slice().sort(function(a, b){
            a = a.toLowerCase();
            b = b.toLowerCase();
            if(a < b) return -1;
            if(a > b) return 1;
            return 0;
        }),
        ordenZA: palabras.slice().sort(function(a, b){
            a = a.toLowerCase();
            b = b.toLowerCase();
            if(a < b) return 1;
            if(a > b) return -1;
            return 0;
        })
    };
}











