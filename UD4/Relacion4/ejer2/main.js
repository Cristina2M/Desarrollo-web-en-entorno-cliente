// =======================================================
// FUNCIONES DE VALIDACIÓN CON REGEX (IGUALES AL EJERCICIO ANTERIOR)
// =======================================================

const validarDNI = (valor) => {
    // 8 dígitos + 1 letra
    return /^\d{8}[A-Za-z]$/.test(valor);
};

const validarTelefono = (valor) => {
    // 9 dígitos, opcionalmente con prefijo (+XX)
    return /^(?:\+\d{1,3}\s?)?\d{9}$/.test(valor);
};

const validarCorreo = (valor) => {
    // Formato email
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor);
};

const validarLetras = (valor) => {
    // Solo letras, acentos y espacios
    return /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/.test(valor);
};

const validarNombreUsuario = (valor) => {
    // 8+ caracteres, debe tener número y puntuación
    return /(?=.*[.,;!?-])(?=.*\d).{8,}/.test(valor);
};


// =======================================================
// FUNCIÓN PRINCIPAL DE CONTROL PARA EL EVENTO ONBLUR (MEJORADA)
// =======================================================

/**
 * Función genérica para validar un campo de formulario.
 *
 * @param {HTMLInputElement} inputElement El elemento input HTML a validar (this).
 * @param {Function} validatorFn La función de validación (RegEx) a aplicar.
 */
const validarCampo = (inputElement, validatorFn) => {
    const valor = inputElement.value.trim();
    const id = inputElement.id;
    const msgElement = document.getElementById(id + 'Msg');

    // Comprobación de existencia del elemento de mensaje (para depuración)
    if (!msgElement) {
        console.error(`ERROR: No se encontró el elemento de mensaje con ID: ${id}Msg`);
        return;
    }

    // Limpiar clases y mensajes anteriores
    inputElement.classList.remove('incorrect', 'correct');
    msgElement.textContent = '';
    msgElement.className = 'validation-message';

    // 1. Validación de Obligatoriedad
    if (valor === '') {
        inputElement.classList.add('incorrect');
        msgElement.textContent = `🚨 El campo ${id.toUpperCase()} es obligatorio.`;
        msgElement.className = 'validation-message incorrect';
        return;
    }

    // 2. Validación Específica con RegEx
    const esValido = validatorFn(valor);

    // 3. Mostrar Resultado al Usuario
    if (esValido) {
        inputElement.classList.add('correct');
        msgElement.textContent = '✅ Correcto.';
        msgElement.className = 'validation-message correct';
    } else {
        inputElement.classList.add('incorrect');
        
        let mensajeError = '❌ Formato incorrecto. ';
        
        // Mensajes de error específicos
        if (id === 'dni') {
            mensajeError += 'Debe ser 8 dígitos seguidos de 1 letra (ej: 12345678A).';
        } else if (id === 'telefono') {
            mensajeError += 'Debe ser un número de teléfono de 9 dígitos.';
        } else if (id === 'email') {
            mensajeError += 'Debe tener el formato: usuario@dominio.com.';
        } else if (id === 'username') {
            mensajeError += 'Debe tener al menos 8 caracteres, contener un número y un signo de puntuación (.,;!...).';
        } else if (id === 'nombre' || id === 'apellidos') {
             mensajeError += 'Solo se permiten letras y espacios.';
        }

        msgElement.textContent = mensajeError;
        msgElement.className = 'validation-message incorrect';
    }
};