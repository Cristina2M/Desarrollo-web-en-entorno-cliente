
//Funcion que devuelve una cookie en concreto
const devuelveCookie = (nombre) => {
    // let name = nombre + "=";
    let decodeCookie = decodeURIComponent(document.cookie);
    let ca = decodeCookie.split('; ');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        let partesC = c.split('=');
        if (partesC[0] == nombre) {
            return partesC[1];
        }
    }
}

//Funcion que muestra todas las cookies
const MostrarCookie = () => {
    console.log('Todas la cookies: ' + document.cookie);
    alert('Todas la cookies: ' + document.cookie);

    let valorTema = devuelveCookie('tema');
}

//Funcion para crear un cookie y añadirle un tiempo de expiración
const fCrearCookie = (nombre, valor, diasExpiracion) => {
    let d = new Date();
    d.setTime(d.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000));
    let expiracion = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

//Funcion con la que creamos cookies en concreto
const CreaCookie = () => {
    document.cookie = "usuario=tema";
    document.cookie = "tema=oscuro";
    fCrearCookie('apellido', 'Pérez', 7);
}




// Llamada a las funciones
const main_cookies = () => {

    document.getElementById('btnCrearCookie').addEventListener('click', CreaCookie)
    document.getElementById('btnMostrarCookie').addEventListener('click', MostrarCookie)


}





document.addEventListener('DOMContentLoaded', function () {

    main_cookies();

})