// Ejercicio 1: Transformación de funciones a arrow functions

// Función 1: Suma de dos números
const sum = (num1, num2) => num1 + num2;

// Función 2: Mostrar longitud de un string
const stringLength = (str) => {
    console.log(`la longitud de "${str}" es:`, str.length);
};

// Función 3: Mostrar longitud de un string y retornarla
const stringLength2 = (str) => {
    let length = str.length;
    console.log(`la longitud de "${str}" es:`, length);
    return str.length;
};

// Función 4: Mostrar alerta aleatoria
const alerts = [
    "Hey, you are awesome",
    "You are so wonderful",
    "What a marvel you are",
    "You're so lovely",
    "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"
];

const showAlert = (name) => {
    alert(alerts[(Math.floor(Math.random() * alerts.length))] + `, ${name}!`);
};

// Ejercicio 2: Arrow function que retorna string con nombre y edad
const greeting = (name, age) => `Hola, soy ${name}, y tengo ${age} años.`;

// Ejercicio 3: Arrow function que suma elementos de un array
const sumArray = (arr) => {
    return arr.reduce((total, num) => total + num, 0);
};

// Ejercicio 4: Función corregida (sintaxis arreglada)
let eye = "eye";
const fire = () => `bulls-`;

// Ejercicio 9: Función fibonacci refactorizada
const fibonacci = (n) => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};
// Exportar funciones para usar en HTML
// En un entorno real, se usaría export, pero para este ejemplo simple
// las funciones estarán disponibles globalmente


