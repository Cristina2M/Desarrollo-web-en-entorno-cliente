// Referencia al contenedor de texto que vamos a modificar
const TEXTO = document.getElementById('area-texto');
// Definimos el tamaño inicial en píxeles, que coincide con el CSS inicial.
const TAMANO_BASE = 16; 
const PASO = 2; // Cantidad de píxeles para aumentar/disminuir

/* -------------------------------------------------------------------
   Funciones para el Tamaño de Fuente (Incrementar, Decrementar, Resetear)
   ------------------------------------------------------------------- */

// FUNCIÓN 1: INCREMENTAR
function incrementarFuente() {
    // 1. Obtiene el tamaño actual de la fuente como número (float)
    let tamanoActual = parseFloat(window.getComputedStyle(TEXTO).fontSize);
    
    // 2. Aplica el nuevo tamaño
    TEXTO.style.fontSize = (tamanoActual + PASO) + 'px'; 
}

// FUNCIÓN 2: DECREMENTAR
function decrementarFuente() {
    // 1. Obtiene el tamaño actual de la fuente
    let tamanoActual = parseFloat(window.getComputedStyle(TEXTO).fontSize);
    
    // 2. Comprueba que el tamaño no sea demasiado pequeño (Ej: mínimo 10px)
    if (tamanoActual > (TAMANO_BASE - (PASO * 3))) {
        // 3. Aplica el nuevo tamaño
        TEXTO.style.fontSize = (tamanoActual - PASO) + 'px';
    } else {
        alert('El texto no puede ser más pequeño.');
    }
}

// FUNCIÓN 3: RESETEAR
function resetFuente() {
    // Vuelve al tamaño por defecto definido
    TEXTO.style.fontSize = TAMANO_BASE + 'px';
}


/* -------------------------------------------------------------------
   Función para la Alineación de Texto
   ------------------------------------------------------------------- */

// FUNCIÓN 4: CAMBIAR ALINEACIÓN
function cambiarAlineacion(alineacion) {
    // Establece la propiedad CSS text-align.
    // Los valores serán 'justify' o 'left', según el botón pulsado.
    TEXTO.style.textAlign = alineacion;
}