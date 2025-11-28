window.onload = function () {
    var contador = document.getElementById('contador');
    var boton = document.getElementById('boton');

    boton.onclick = function () {
        var valorActual = parseInt(contador.innerHTML);
        contador.innerHTML = valorActual + 1;
    };
};
