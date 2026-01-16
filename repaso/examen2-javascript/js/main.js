import { Movie } from './Movie.js';

/*
    Archivo Principal
    Encargado de inicializar la aplicación y gestionar los eventos del DOM.
*/

document.addEventListener('DOMContentLoaded', async () => {
    const app = new Movie();

    // Elementos del DOM
    const searchInput = document.getElementById('searchInput');
    const btnBuscar = document.getElementById('btnBuscar');
    const btnFilterYear = document.getElementById('btnFilterYear');
    const filterYear = document.getElementById('filterYear');
    const btnFilterLang = document.getElementById('btnFilterLang');
    const filterLang = document.getElementById('filterLang');

    // Inicialización: Obtener películas
    let allMovies = await app.devuelveMovies();
    app.show(allMovies, 'movieContainer');
    app.updateCounter(); // Inicializar contador

    /*
        Buscador en vivo (1 punto)
        Requisito: Al ir pulsando teclas filtra.
    */
    searchInput.addEventListener('input', (e) => {
        const texto = e.target.value;

        // Validaciones (1 punto)
        if (!validarBusqueda(texto)) {
            // Opcional: Mostrar error visual o simplemente no buscar
            // Por UX, filtraremos solo si es válido o vacío
            if (texto === '') {
                app.show(allMovies, 'movieContainer');
            }
            return;
        }

        const filtered = allMovies.filter(m =>
            m.titulo.toLowerCase().includes(texto.toLowerCase())
        );
        app.show(filtered, 'movieContainer');
    });

    /*
        Botón Buscar (Defecto)
    */
    btnBuscar.addEventListener('click', () => {
        const texto = searchInput.value;
        if (validarBusqueda(texto)) {
            const filtered = allMovies.filter(m =>
                m.titulo.toLowerCase().includes(texto.toLowerCase())
            );
            app.show(filtered, 'movieContainer');
        } else {
            alert("Búsqueda inválida. No empiece con números o caracteres especiales.");
        }
    });

    /*
        Validar Búsqueda
        a) No comenzar con número ni - , ; , $
        b) No contener - ; " @
    */
    function validarBusqueda(texto) {
        if (!texto) return true; // Vacío es válido (reset)

        // a) No comenzar con...
        const regexInicio = /^[0-9\-,;\$]/;
        if (regexInicio.test(texto)) return false;

        // b) No contener...
        // Nota: El enunciado dice 'ni “-” ni “;” ni “ ni “@”'.
        // Asumo que la tercera comilla se refiere a comillas dobles o simples.
        const regexContenido = /[\-;"@]/;
        if (regexContenido.test(texto)) return false;

        return true;
    }

    /*
        Filtros: Año
    */
    btnFilterYear.addEventListener('click', () => {
        const year = filterYear.value;
        const filtered = app.filtraMovies(allMovies, 'y', year);
        app.show(filtered, 'movieContainer');
    });

    /*
        Filtros: Idioma
    */
    btnFilterLang.addEventListener('click', () => {
        const lang = filterLang.value;
        const filtered = app.filtraMovies(allMovies, 'i', lang);
        app.show(filtered, 'movieContainer');
    });

    // Bonus: Uso de modMovie (solo para demostración en consola)
    console.log("Datos simplificados (modMovie):", app.modMovie(allMovies));
});
