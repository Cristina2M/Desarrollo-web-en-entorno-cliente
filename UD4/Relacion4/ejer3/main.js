// =======================================================
// FUNCIONES DE VALIDACIÓN CON REGEX
// =======================================================

const validarMinuscula = (valor) => {
    return /[a-z]/.test(valor);
};

const validarMayuscula = (valor) => {
    return /[A-Z]/.test(valor);
};

const validarLongitud = (valor) => {
    return valor.length >= 8;
};

// =======================================================
// FUNCIÓN DE UTILIDAD PARA MOSTRAR/OCULTAR ELEMENTOS
// =======================================================

const toggleRequirement = (element, isMet) => {
    if (isMet) {
        // Si se cumple, lo ocultamos
        element.classList.add('hidden-req');
    } else {
        // Si no se cumple, lo mostramos
        element.classList.remove('hidden-req');
    }
};

// =======================================================
// FUNCIÓN PRINCIPAL DE CONTROL
// =======================================================

const validarTiempoReal = () => {
    const input = document.getElementById('username');
    const valor = input.value;

    // Obtener elementos
    const reqLower = document.getElementById('reqLower');
    const reqUpper = document.getElementById('reqUpper');
    const reqLength = document.getElementById('reqLength');

    // Aplicar validaciones
    toggleRequirement(reqLower, validarMinuscula(valor));
    toggleRequirement(reqUpper, validarMayuscula(valor));
    toggleRequirement(reqLength, validarLongitud(valor));
};

// =======================================================
// CORRECCIÓN CLAVE: CONEXIÓN DEL EVENTO (DENTRO DEL MÓDULO)
// =======================================================

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    
    if (usernameInput) {
        // 1. Conectamos la función al evento 'input'
        usernameInput.addEventListener('input', validarTiempoReal);
    }
    
    // 2. Ejecutamos la validación una vez al cargar para mostrar el estado inicial
    validarTiempoReal();
});