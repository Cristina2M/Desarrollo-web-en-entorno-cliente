import { datosApi } from "./funciones.js"

async function valida(objUsuario) { // objUsuario tendrá los atributos user y pass
    try {
        const usuarios = await datosApi('https://fakestoreapi.com/users');

        const comprueba = usuarios.find(usuario =>
            objUsuario.user === usuario.username && objUsuario.pass === usuario.password
        );

        if (comprueba) {
            // El objeto Usuario contendrá los siguientes atributos: id, email, username
            const usuarioObj = {
                id: comprueba.id,
                email: comprueba.email,
                username: comprueba.username
            };
            return usuarioObj;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error al validar usuario:", error);
        return null;
    }
}





function main() {
    console.log('Estás en el main del login');

    const boton = document.getElementById('btn');

    boton.addEventListener('click', async (e) => {
        e.preventDefault(); // Prevenir envío del formulario si estuviera dentro de uno con submit

        const user = document.getElementById('usu').value;
        const pass = document.getElementById('pass').value;
        const divErrores = document.getElementById('errores');

        // Limpio posibles errores previos que puede estar mostrando el div
        divErrores.textContent = '';

        if (!user || !pass) {
            divErrores.textContent = 'Por favor, rellene ambos campos.';
            return;
        }

        const objUsuario = { 'user': user, 'pass': pass };

        const resultado = await valida(objUsuario);

        if (resultado) {
            console.log('Usuario correcto', resultado);
            localStorage.setItem('Usuario', JSON.stringify(resultado));
            window.location.href = 'datosExamen.html';
        } else {
            console.log('Usuario incorrecto');
            divErrores.textContent = 'Usuario o contraseña incorrectos.';
            localStorage.removeItem('Usuario');
        }
    });

}

document.addEventListener('DOMContentLoaded', main);
