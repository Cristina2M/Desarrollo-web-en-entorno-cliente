// =======================================================
// FUNCIONES DE VALIDACIÓN (PUNTO 1)
// =======================================================

/**
 * validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula.
 * [cite: 4]
 * @param {string} valor El string a validar.
 * @returns {boolean} True si contiene una mayúscula.
 */
const validarMayuscula = (valor) => {
    // /[A-Z]/ busca cualquier carácter de la 'A' a la 'Z'.
    return /[A-Z]/.test(valor);
};

/**
 * validarCaracteresEspeciales: El parámetro debe contener al menos uno de los
 * siguientes caracteres: $!@#%$ (el ejemplo en el documento tiene un error,
 * usamos !@#$%, que son los más comunes).
 * [cite: 5]
 * @param {string} valor El string a validar.
 * @returns {boolean} True si contiene un carácter especial.
 */
const validarCaracteresEspeciales = (valor) => {
    // /[!@#\$%]/ busca cualquiera de los caracteres listados. El $ debe ser escapado con \.
    return /[$!@#%]/.test(valor);
};

/**
 * validarLongitud: El parámetro debe tener al menos 8 caracteres.
 * [cite: 7]
 * @param {string} valor El string a validar.
 * @returns {boolean} True si tiene 8 o más caracteres.
 */
const validarLongitud = (valor) => {
    // Se usa el método length por simplicidad, aunque RegEx /^.{8,}$/ también funcionaría.
    return valor.length >= 8;
};

/**
 * validarNumero: El parámetro debe contener al menos un dígito.
 * [cite: 7]
 * @param {string} valor El string a validar.
 * @returns {boolean} True si contiene al menos un dígito.
 */
const validarNumero = (valor) => {
    // /\d/ es un atajo para [0-9], buscando cualquier dígito.
    return /\d/.test(valor);
};

/**
 * validarCorreo: El parámetro debe tener el formato correcto de un email.
 * [cite: 6]
 * @param {string} valor El string a validar.
 * @returns {boolean} True si tiene un formato de email válido.
 */
const validarCorreo = (valor) => {
    // Patrón robusto para email: algo@algo.dominio
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(valor);
};

/**
 * validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito
 * (asumiendo 16 dígitos).
 * [cite: 6]
 * @param {string} valor El string a validar.
 * @returns {boolean} True si tiene un formato de tarjeta válido.
 */
const validarTarjetaCredito = (valor) => {
    // Acepta 16 dígitos opcionalmente separados por un espacio o guion.
    const tarjetaRegex = /^(\d{4}[ -]?){3}\d{4}$/;
    return tarjetaRegex.test(valor);
};

// =======================================================
// CÓDIGO DE PRUEBA
// =======================================================

// Definición de las pruebas
const pruebas = [
    {
        func: validarMayuscula,
        nombre: 'validarMayuscula',
        requisito: 'Al menos una Mayúscula [cite: 4]',
        valores: [
            { valor: 'holaMundo', esperado: true },
            { valor: 'holamundo', esperado: false }
        ]
    },
    {
        func: validarCaracteresEspeciales,
        nombre: 'validarCaracteresEspeciales',
        requisito: 'Al menos un carácter $!@#% [cite: 5]',
        valores: [
            { valor: 'pass!word', esperado: true },
            { valor: 'password', esperado: false }
        ]
    },
    {
        func: validarLongitud,
        nombre: 'validarLongitud',
        requisito: 'Al menos 8 caracteres [cite: 7]',
        valores: [
            { valor: 'longitudOK', esperado: true },
            { valor: 'corta', esperado: false }
        ]
    },
    {
        func: validarNumero,
        nombre: 'validarNumero',
        requisito: 'Al menos un dígito [cite: 7]',
        valores: [
            { valor: 'user123', esperado: true },
            { valor: 'usuario', esperado: false }
        ]
    },
    {
        func: validarCorreo,
        nombre: 'validarCorreo',
        requisito: 'Formato email (user@dom.com) [cite: 6]',
        valores: [
            { valor: 'test@ejemplo.com', esperado: true },
            { valor: 'test@ejemplo', esperado: false }
        ]
    },
    {
        func: validarTarjetaCredito,
        nombre: 'validarTarjetaCredito',
        requisito: 'Formato Tarjeta (16 dígitos) [cite: 6]',
        valores: [
            { valor: '1234-5678-9012-3456', esperado: true },
            { valor: '1234567890123456', esperado: true },
            { valor: '123456789012345', esperado: false } // 15 dígitos
        ]
    }
];

// Función para mostrar los resultados en la tabla HTML
const mostrarResultados = () => {
    const tbody = document.getElementById('validation-results').querySelector('tbody');
    tbody.innerHTML = ''; // Limpiar la tabla

    pruebas.forEach(prueba => {
        prueba.valores.forEach(item => {
            const resultado = prueba.func(item.valor);
            const fila = tbody.insertRow();
            
            // Columna 1: Función
            fila.insertCell().textContent = prueba.nombre;
            
            // Columna 2: Valor de Prueba
            fila.insertCell().textContent = item.valor;
            
            // Columna 3: Requisito
            fila.insertCell().textContent = prueba.requisito;
            
            // Columna 4: Resultado y Estilo
            const resultadoCell = fila.insertCell();
            resultadoCell.textContent = resultado;
            resultadoCell.classList.add(resultado === item.esperado ? 'pass' : 'fail');
            
            if (resultado !== item.esperado) {
                 // Esto es solo para la demostración, si el resultado no es el esperado
                 console.error(`ERROR en ${prueba.nombre} con valor '${item.valor}'. Esperado: ${item.esperado}, Obtenido: ${resultado}`);
            }
        });
    });
};

// Ejecutar la visualización de resultados al cargar la página
window.onload = mostrarResultados;