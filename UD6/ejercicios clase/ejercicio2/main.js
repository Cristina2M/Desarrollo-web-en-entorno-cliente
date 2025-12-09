// ---------- FUNCIONES DEL LOGIN ----------------

function comprobarDatos() {
    const url = 'http://localhost:3000/students';

    const usuarioInput = document.getElementById('usuario');
    const nombreUsuario = usuarioInput.value.trim();

    const contrasenaInput = document.getElementById('contrasena');
    const contrasena = contrasenaInput.value.trim();


        fetch(url)
            .then(datos => datos.json()) //hay que hacer primero un .then para que "guarde los datos" y en el siguiente ya si podemos usarlos
            .then(datos => {
            const estudiantes = datos
            console.log(estudiantes)

            const usuarioEncontrado = estudiantes.find(estudiante => 
            estudiante.name === nombreUsuario && estudiante.email === contrasena
            );

            if (usuarioEncontrado) {
                sessionStorage.setItem('Usuario', nombreUsuario); //importante
                console.log('Datos correctos. Redirigiendo...');
                window.location.href = 'index.html'; 
            } else {
                console.warn('Datos incorrectos.');
                alert('Nombre de usuario o contraseña incorrectos.');
            }
            })
        .catch(error => console.log('Error: ', error))
}

// -----------------------------------------------


function main() {
    console.log('Estas en el main del login');

    const botonLogin = document.getElementById('btn');

    if (botonLogin) {
        botonLogin.addEventListener('click', comprobarDatos);
    } else {
        console.log('No se encontró el botón con ID "btn".');
    }
}


document.addEventListener('DOMContentLoaded', main());