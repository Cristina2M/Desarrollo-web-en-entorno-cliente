let tiempoInicio;

const elementoTiempo = document.getElementById('tiempo');


function iniciarContador() {
    tiempoInicio = Date.now();
    
    actualizarTiempo(); 
    setInterval(actualizarTiempo, 1000);
}


function actualizarTiempo() {
    const segundosTotales = Math.floor((Date.now() - tiempoInicio) / 1000);
    
    const horas = Math.floor(segundosTotales / 3600);
    const minutos = Math.floor((segundosTotales % 3600) / 60);
    const segundos = segundosTotales % 60;
    
    const formatoHoras = String(horas).padStart(2, '0');
    const formatoMinutos = String(minutos).padStart(2, '0');
    const formatoSegundos = String(segundos).padStart(2, '0');
    
    if (elementoTiempo) {
        elementoTiempo.textContent = 
            `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
    }
}