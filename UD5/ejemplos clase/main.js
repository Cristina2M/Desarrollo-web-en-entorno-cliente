// const form = document.querySelector('form');

// form.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form submission

//     // Perform custom validation logic
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (!emailIsValid(email)) {
//         alert('Please enter a valid email address.');
//         return;
//     }

//     if (password.length < 6) {
//         alert('Password must be at least 6 characters long.');
//         return;
//     }

//     // If validation passes, submit the form
//     form.submit();
// });

// function emailIsValid(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }



const muestraDatosFormulario=()=>{
    const formulario=document.forms[0];

    let name=document.getElementById("nombre").value;

    console.log('Nombre: ', name);


}

// const main=()=>{
//     console.log();
//     document.getElementById(`btnEnviar`).addEventListener('click', (event) => {
//         event.preventDefault();
//         muestraDatosFormulario();
//     })
// }



(function () {
    console.log(`Estoy en el main UD5-ejemplosClase`);
        document.getElementById(`btnEnviar`).addEventListener('click', (event) => {
        event.preventDefault();
        muestraDatosFormulario();
    })
})();