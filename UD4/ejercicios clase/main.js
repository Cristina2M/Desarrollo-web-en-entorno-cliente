// ------ EVENTOS --------
const inicializaEventos = () => {
    console.log("Eventos inicializados")
    document.getElementById("btn1").addEventListener("click", () => {
        alert("Has pulsado el boton");
    });
};


const eventosDiv = () => {
    document.getElementById("div1").addEventListener("mouseover", (event) => {
        document.getElementById("div1").style.backgroundColor = 'green'; //color al que quiero que cambie
        document.getElementById("div1").textContent = `(${event.pageX},${event.pageY})`;
        // console.log('Objeto evento: ', event);
        console.log(`--- Evento: ${event.type} en div ${event.target.id} ---`);
        console.log(`¿Pulsaba el control? ${event.ctrlKey}`)
    });
    document.getElementById("div1").addEventListener("mouseout", (event) => {
        document.getElementById("div1").style.backgroundColor = '#007bff'; //color original
        document.getElementById("div1").textContent = '1'; // contenido original
    });
}








// ------ EXPRESIONES REGULARES --------

// CORREO-ELECTRONICO: ^[^@|\.]*@[^@]*\.[^@]*$
// expresión regular para validar un email: [^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+


const expresionRegular = () => {
    const texto = '45678';

    // se puede declarar una expresion regular de dos maneras:
    const regexNumero = /^\d+$/; //expresion regular para un número
    const regexNumero2 = new RegExp('^d+(\.\d+)?$'); //expresion regular prar un número decimal

    //comprobamos si cumple con la expresión regular
    if (regexNumero.test(texto)) {
        console.log(`${texto} es un número válido`);
    } else {
        console.log(`${texto} NO es un número válido`);
    }


    if (regexNumero2.test(texto)) {
        console.log(`${texto} es un número decimal válido`);
    } else {
        console.log(`${texto} NO es un número decimal válido`);
    }
}



const expresionRegular2 = () => {

    const regex = /[0-9]{5}/g;
    const str = "codigo postal: 18800, codigo2: 12365";
    let array;

    while ((array = regex.exec(str)) !== null) {
        console.log(`Encontrado ${array[0]}. Siguiente comienzo de la búsqueda en ${regex.lastIndex}.`);
        // Expected output: "Encontrado 18800. Siguiente comienzo de la búsqueda en 20."
        // Expected output: "Encontrado 12365. Siguiente comienzo de la búsqueda en 36."
    }
}

// ---------------------------
// exec()	Executes a search for a match in a string. It returns an array of information or null on a mismatch.
// test()	Tests for a match in a string. It returns true or false.
// ---------------------------






(function () {
    inicializaEventos();
    eventosDiv();
    expresionRegular();
    expresionRegular2();
})();


