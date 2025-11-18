// =======================================================
// TAREA 1: FUNCIONES DE VALIDACIÓN CON REGEX
// =======================================================

/**
 * Valida el formato de número de tarjeta (16 dígitos, opcionalmente con espacios/guiones).
 */
const validarTarjetaCredito = (valor) => {
    // Elimina espacios y guiones y verifica 13 a 16 dígitos
    const cleanValue = valor.replace(/[\s-]/g, '');
    return /^\d{13,16}$/.test(cleanValue);
};

/**
 * Valida el nombre del titular (solo letras y espacios).
 */
const validarNombreTitular = (valor) => {
    // Debe contener al menos dos palabras separadas por espacio (Nombre y Apellido)
    return /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/.test(valor) && valor.trim().includes(' ');
};

/**
 * Valida el CVV (3 o 4 dígitos).
 */
const validarCVV = (valor) => {
    return /^\d{3,4}$/.test(valor);
};

// =======================================================
// TAREA 2: ACTUALIZACIÓN VISUAL EN TIEMPO REAL
// =======================================================

const updateCardVisuals = (inputElement) => {
    // 1. Número de Tarjeta
    const cardNumberInput = document.getElementById('cardNumber');
    const displayNum = document.getElementById('cardDisplayNumber');
    
    if (inputElement === cardNumberInput) {
        // Formatea el número con espacios cada 4 dígitos (sin RegEx en el input, solo visual)
        const formattedValue = cardNumberInput.value.replace(/\s?/g, '').match(/.{1,4}/g);
        cardNumberInput.value = formattedValue ? formattedValue.join(' ') : '';
        
        const visualNumber = cardNumberInput.value.padEnd(19, '#').replace(/#/g, '#');
        displayNum.textContent = visualNumber;
    }

    // 2. Nombre del Titular
    const cardHolderInput = document.getElementById('cardHolder');
    const displayName = document.getElementById('cardDisplayName');
    
    if (inputElement === cardHolderInput) {
        displayName.textContent = cardHolderInput.value.toUpperCase() || 'FULL NAME';
    }

    // 3. Fecha de Expiración (Actualización combinada de Month y Year)
    const expiryMonth = document.getElementById('expiryMonth').value || 'MM';
    const expiryYear = document.getElementById('expiryYear').value || 'YY';
    document.getElementById('cardDisplayExpiry').textContent = `${expiryMonth}/${expiryYear}`;
};

// =======================================================
// TAREA 3: FUNCIÓN PRINCIPAL DE VALIDACIÓN AL ENVIAR
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('creditCardForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const inputs = [
            { id: 'cardNumber', validator: validarTarjetaCredito, msg: 'Número de tarjeta inválido (13-16 dígitos).' },
            { id: 'cardHolder', validator: validarNombreTitular, msg: 'Introduce Nombre y Apellido.' },
            { id: 'cvv', validator: validarCVV, msg: 'CVV inválido (3 o 4 dígitos).' }
        ];

        let isValid = true;

        inputs.forEach(item => {
            const input = document.getElementById(item.id);
            const value = input.value.trim();
            const validationResult = item.validator(value);

            input.classList.remove('incorrect');
            if (!validationResult) {
                input.classList.add('incorrect');
                isValid = false;
                // Opcional: mostrar un mensaje de error más específico
            }
        });

        // Validar Fecha de Expiración (Lógica simple: que ambos estén seleccionados)
        const month = document.getElementById('expiryMonth');
        const year = document.getElementById('expiryYear');
        
        month.classList.remove('incorrect');
        year.classList.remove('incorrect');
        
        if (!month.value || !year.value) {
            month.classList.add('incorrect');
            year.classList.add('incorrect');
            isValid = false;
        }

        if (isValid) {
            alert('Formulario de Tarjeta Válido. ¡Pago procesado!');
            // Aquí iría el código para enviar los datos reales al servidor
        } else {
            alert('Por favor, corrige los campos resaltados.');
        }
    });
    
    // Ejecuta la actualización visual al inicio para que la fecha y los valores por defecto se muestren.
    updateCardVisuals();
});