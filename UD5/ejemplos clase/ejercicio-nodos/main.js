import db from "./db.json" with {type: "json"} //para importar la base de datos

//funcion que añade un div con un párrafo dentro del contenedor contenido
//la funcion recibe un argumento que te indica el numero de div que quiere que crees
//despues he hecho que aparezcan los nombres de todos los estudiantes

function todosLosEstudiantes() {
    const padre = document.getElementById("contenedor");
    // ESTILO PARA EL DIV PADRE QUE CONTIENE LOS DIVS QUE CONTIENEN UN P
    padre.style.display = "flex";
    padre.style.flexWrap = "wrap";
    padre.style.gap = "20px";
    padre.style.padding = "20px";

    padre.innerHTML = ''; //PARA BORRAR EL CONTENIDO Y QUE NO SE REPITA


    // let nuevoDiv = document.createElement('div');
    // padre.appendChild(nuevoDiv);

    // let nuevoParrafo = document.createElement('p'); //para crear un p
    // nuevoParrafo.textContent = "Hola 1"; //para añadir el contenido al p

    // nuevoDiv.appendChild(nuevoParrafo); //para añadir el p al div con el id contenedor

    for (let i = 0; i < db.students.length; i++) {
        let nuevoDiv = document.createElement('div');
        // ESTILO PARA EL DIV QUE CONTIENE EL P
        nuevoDiv.style.border = "1px solid black";
        nuevoDiv.style.borderRadius = "10px";
        nuevoDiv.style.width = "200px";
        nuevoDiv.style.padding = "15px";
        nuevoDiv.style.backgroundColor = "#f9f9f9";


        padre.appendChild(nuevoDiv);

        let nuevoParrafo = document.createElement('p');
        // nuevoParrafo.textContent = `Hola ${i+1}`;
        nuevoParrafo.textContent = `Nombre: ` + db.students[i].name;

        // ESTILO PARA EL P
        nuevoParrafo.style.fontSize = "1.1em";

        nuevoDiv.appendChild(nuevoParrafo);
    }
}



// FUNCION QUE SELECCIONA SOLO A LOS ALUMNOS ACTIVOS
function alumnosActivos() {

    const padre = document.getElementById("contenedor");
    padre.style.display = "flex";
    padre.style.flexWrap = "wrap";
    padre.style.gap = "20px";
    padre.style.padding = "20px";

    padre.innerHTML = ''; //PARA BORRAR EL CONTENIDO Y QUE NO SE REPITA

    for (let i = 0; i < db.students.length; i++) {
        if (db.students[i].active) {
            let nuevoDiv = document.createElement('div');
            // ESTILO PARA EL DIV QUE CONTIENE EL P
            nuevoDiv.style.border = "1px solid black";
            nuevoDiv.style.borderRadius = "10px";
            nuevoDiv.style.width = "200px";
            nuevoDiv.style.padding = "15px";
            nuevoDiv.style.backgroundColor = "#f9f9f9";


            padre.appendChild(nuevoDiv);

            let nuevoParrafo = document.createElement('p');
            // nuevoParrafo.textContent = `Hola ${i+1}`;
            nuevoParrafo.textContent = `Nombre: ` + db.students[i].name;

            // ESTILO PARA EL P
            nuevoParrafo.style.fontSize = "1.1em";

            nuevoDiv.appendChild(nuevoParrafo);
        }
    }

}




(function () {
    todosLosEstudiantes();
    if (document.getElementById(`activos`)) {
        // con el evento 'change' cuando el valor del elemento del formulario (en este caso el checkbox) cambia, se activa el evento
        document.getElementById(`activos`).addEventListener('change', (event) => {
            if (event.target.checked) { //si el checkbox esta seleccionado(checked) muestra solo los activos
                alumnosActivos();
            } else { //cuando el checkbox no esta seleccionado muestra todos los estudiantes
                todosLosEstudiantes();
            }
        });
    }
})();