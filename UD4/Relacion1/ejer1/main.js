const botonAlert = () => {
    console.log("Eventos inicializados")
    document.getElementById("btn1").addEventListener("click", () => {
        alert("Has pulsado el boton");
    });
};


(function () {
    botonAlert();
}) ();




