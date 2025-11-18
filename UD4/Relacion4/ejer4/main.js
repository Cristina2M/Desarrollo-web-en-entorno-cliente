// =======================================================
// FUNCIONES DE VALIDACIÓN CON REGEX
// =======================================================

const validarLetras = (valor) => {
    // Solo letras, acentos y espacios
    return /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/.test(valor);
};

const validarTelefono = (valor) => {
    // Acepta 9 dígitos exactos
    return /^\d{9}$/.test(valor);
};

const validarCorreo = (valor) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(valor);
};

const validarPassword = (valor) => {
    // 8+ chars, debe tener número y puntuación (Requisitos del Ej. 2)
    return /(?=.*[.,;!?-])(?=.*\d).{8,}/.test(valor);
};

// =======================================================
// FUNCIÓN PRINCIPAL DE CONTROL PARA EL EVENTO ONBLUR
// =======================================================

/**
 * Función genérica para validar un campo de formulario al perder el foco.
 * Debe ser global para que el onblur del HTML la encuentre.
 *
 * @param {HTMLInputElement} inputElement El elemento input HTML.
 * @param {Function} validatorFn La función de validación (RegEx) a aplicar.
 */
const validarCampoCrowdrise = (inputElement, validatorFn) => {
    const valor = inputElement.value.trim();
    
    // Limpiar clases
    inputElement.classList.remove('incorrect');

    // 1. Validación de Obligatoriedad
    if (valor === '') {
        inputElement.classList.add('incorrect');
        return;
    }

    // 2. Validación Específica con RegEx
    const esValido = validatorFn(valor);

    // 3. Resaltar borde
    if (!esValido) {
        inputElement.classList.add('incorrect');
    }
};


// =======================================================
// VALIDACIÓN ESPECIAL: CONFIRMACIÓN DE CONTRASEÑA
// =======================================================

/**
 * Función para validar que la confirmación de contraseña coincida.
 * Debe ser global.
 */
const validarConfirmacionPassword = (inputElement) => {
    const password = document.getElementById('password').value;
    const confirmPassword = inputElement.value;
    
    // Limpiar clases
    inputElement.classList.remove('incorrect');

    // Comprobación de que no esté vacío y coincida
    if (confirmPassword === '' || confirmPassword !== password) {
        inputElement.classList.add('incorrect');
    }
};

// =======================================================
// EVENTO PARA PREVENIR EL ENVÍO DEL FORMULARIO
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('crowdriseForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            // Forzar la validación de todos los campos al intentar enviar
            validarCampoCrowdrise(document.getElementById('firstName'), validarLetras);
            validarCampoCrowdrise(document.getElementById('lastName'), validarLetras);
            validarCampoCrowdrise(document.getElementById('phone'), validarTelefono);
            validarCampoCrowdrise(document.getElementById('email'), validarCorreo);
            validarCampoCrowdrise(document.getElementById('password'), validarPassword);
            validarConfirmacionPassword(document.getElementById('confirmPassword'));

            const incorrectos = this.querySelectorAll('.incorrect').length;
            
            if (incorrectos > 0 || !document.getElementById('terms').checked) {
                alert('Por favor, corrige los campos resaltados y acepta los términos.');
                event.preventDefault(); // Evitar el envío
            }
        });
    }
});