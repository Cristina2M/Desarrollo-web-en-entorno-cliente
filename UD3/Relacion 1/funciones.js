//Actividad 1
function maximo(a, b, c, d) {
    return Math.max(a, b, c, d);
}


//Actividad 2
function lanzamiento() {
    return Math.floor(Math.random() * 6) + 1;
}


//Actividad 3
function simulacionTiradas() {
    const NUM_TIRADAS = 6000;
    
    // Inicializamos el contador de resultados
    const ocurrencias = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 };

    // Bucle para realizar las tiradas
    for (let i = 0; i < NUM_TIRADAS; i++) {
        const resultado = lanzamiento(); 
        
        // El resultado es un número, lo convertimos a string para usarlo como clave
        ocurrencias[resultado.toString()]++; 
    }

    return ocurrencias;
}



//Actividad 4
function calcularVolumenEsfera(radio) {
    const volumen = (4 / 3) * Math.PI * (radio * radio * radio);;
    return volumen;
}


//Actividad 5
function calcularAreaCirculo(radio) {
    return Math.PI * (radio * radio);
}



//Actividad 6
function potenciaRecursiva(base, exponente) {
    // Caso Base: Si el exponente es 0, el resultado es 1 (b^0 = 1)
    if (exponente === 0) {
        return 1;
    }

    // Manejar exponentes negativos no es trivial con recursión simple,
    // pero si ocurre, se devuelve un error o se usa Math.pow para el resultado inverso.
    if (exponente < 0) {
        console.error("La función potenciaRecursiva solo está diseñada para exponentes no negativos.");
        // Opcional: devolver 1 / potenciaRecursiva(base, -exponente);
        return 1 / potenciaRecursiva(base, -exponente);; 
    }

    // Paso Recursivo: b^e = b * b^(e-1)
    // La función se llama a sí misma pero con el exponente reducido en 1.
    return base * potenciaRecursiva(base, exponente - 1);
}


//Actividad 7
function calcularFactorial(n) {
    //Caso Base: El factorial de 0 es 1 (y también se usa para 1!, ya que 1! = 1 * 0!)
    if (n === 0 || n === 1) {
        return 1;
    }

    //Manejo de entradas inválidas
    if (n < 0 || !Number.isInteger(n)) {
        console.error("Factorial solo se define para enteros no negativos.");
        return NaN;
    }

    //Paso Recursivo: n! = n * (n-1)!
    return n * calcularFactorial(n - 1);
}





