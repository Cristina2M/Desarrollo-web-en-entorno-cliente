import { datosApi } from "./funciones.js"




function valida(objUsuario) { //objUsuario tendrá los atributos user y pass devuelve un objeto(id, email y username) o null
    const usuarios = datosApi('https://fakestoreapi.com/users')
    usuarios.then(usuarios => {

        const comprueba = usuarios.find(usuario =>
            objUsuario.user === usuario.username && objUsuario.pass === usuario.password)

        if (comprueba) {
            console.log('Datos introducidos correctos')
            sessionStorage.setItem('Usuario', objUsuario.user);
            const objeto = {'id': comprueba.id, 'email': comprueba.email, 'username':comprueba.username}
            //window.location('datoExamen.html'); //no recuerdo como era para que cambiara de ventana
            return console.log(objeto); //el console log solo está para mostrar que devuelve un objeto
        } else {
            console.log('Datos introducidos erróneos')
            return null;
        }
    })

}








function main() {
    console.log('Estas en el main del login');

    //cogemos los datos que ha introducido el usuario
    let user = document.getElementById('usu');
    let pass = document.getElementById('pass');

    user='johnd'
    pass='m38rmF$'
    const objUsuario = { 'user': user, 'pass': pass }

    const boton = document.getElementById('btn')
    //no entiendo si le estoy añadiendo un evento click porque confirma los datos introducidos de forma automática, debo de tener algún fallo muy tonto
    boton.addEventListener('click',
        valida(objUsuario)
    )

}




document.addEventListener('DOMContentLoaded', main);