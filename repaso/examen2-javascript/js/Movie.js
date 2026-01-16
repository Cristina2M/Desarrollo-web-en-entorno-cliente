import { objBDH } from './BDMovieH.js';

export class Movie {
    constructor() {
        this.movies = [];
        this.urlPeliculas = "https://image.tmdb.org/t/p/w500"; // Base para las imágenes
    }

    /*
        Método: devuelveMovies
        Función: Obtiene las películas desde el servidor o usa el fallback.
        Entradas: objBDH (en caso de fallo de fetch se usa internamente)
        Salida: Array de objetos Movie procesados.
    */
    async devuelveMovies() {
        try {
            // Intentamos conectar a json-server
            // COMANDO NECESARIO: npx json-server peliculas.json
            const response = await fetch('http://localhost:3000/peliculas');

            if (!response.ok) {
                throw new Error('Servidor no disponible');
            }

            const data = await response.json();
            return this._procesarMovies(data);

        } catch (error) {
            console.warn("No se pudo conectar a json-server. Usando datos locales (Opción B).", error);
            // Si falla, usamos la Opción B: objBDH
            return this._procesarMovies(objBDH);
        }
    }

    /*
        Método Privado: _procesarMovies
        Función: Normaliza los datos y construye la url de la imagen.
    */
    _procesarMovies(data) {
        this.movies = data.map(m => ({
            id: m.id,
            titulo: m.titulo,
            popularidad: m.popularidad,
            descripcion: m.descripcion,
            yearestreno: m.yearestreno,
            urlimagen: this.urlPeliculas + m.poster_path, // Componemos la URL
            puntuacion: m.puntuacion,
            idioma: m.idioma || 'en' // Por defecto 'en' si no existe
        }));
        return this.movies;
    }

    /*
        Método: show
        Función: Genera el HTML para mostrar las películas en el contenedor.
        Entradas: Array de películas
    */
    show(movies, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Limpiar contenedor

        if (movies.length === 0) {
            container.innerHTML = '<p style="text-align:center; width:100%;">No se encontraron películas.</p>';
            return;
        }

        // Recuperar favoritos para marcar visualmente
        const favorites = JSON.parse(localStorage.getItem('favMovies')) || [];
        const favIds = favorites.map(f => f.id);

        movies.forEach(movie => {
            const card = document.createElement('div');
            card.className = `movie-card ${favIds.includes(movie.id) ? 'favorite' : ''}`;
            card.dataset.id = movie.id;

            card.innerHTML = `
                <div class="fav-indicator">★</div>
                <img src="${movie.urlimagen}" alt="${movie.titulo}" class="movie-poster" onerror="this.src='https://via.placeholder.com/500x750?text=No+Image'">
                <div class="movie-info">
                    <h3 class="movie-title">${movie.titulo}</h3>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span class="movie-score">⭐ ${movie.puntuacion}</span>
                        <span class="movie-year">${movie.yearestreno}</span>
                    </div>
                </div>
            `;

            // Evento click para añadir/quitar de localStorage
            card.addEventListener('click', () => {
                this.toggleFavorite(movie);
                // Re-renderizamos solo la clase para optimizar, o llamamos a un callback externo
                // En este caso, modificamos la clase directamente
                const isFav = this.isFavorite(movie.id);
                if (isFav) {
                    card.classList.add('favorite');
                } else {
                    card.classList.remove('favorite');
                }
            });

            container.appendChild(card);
        });
    }

    /*
        Método: toggleFavorite
        Función: Añade o quita película de localStorage.
        Requisito: (1.5 puntos) Click añade/quita.
        Requisito: (1 punto) Contador.
    */
    toggleFavorite(movie) {
        let favorites = JSON.parse(localStorage.getItem('favMovies')) || [];
        const index = favorites.findIndex(m => m.id === movie.id);

        if (index === -1) {
            // Añadir
            favorites.push(movie);
        } else {
            // Quitar
            favorites.splice(index, 1);
        }

        localStorage.setItem('favMovies', JSON.stringify(favorites));

        // Actualizar contador visualmente
        this.updateCounter();
    }

    isFavorite(id) {
        let favorites = JSON.parse(localStorage.getItem('favMovies')) || [];
        return favorites.some(m => m.id === id);
    }

    updateCounter() {
        const countSpan = document.getElementById('favCount');
        if (countSpan) {
            const favorites = JSON.parse(localStorage.getItem('favMovies')) || [];
            countSpan.textContent = favorites.length;
        }
    }

    /*
        Método: filtraMovies
        Función: Filtra por año u idioma.
        Entradas: arrayMovie, tipoFiltro, valor
    */
    filtraMovies(arrayMovie, tipoFiltro, valor) {
        if (!valor) return arrayMovie; // Si no hay valor, devolver todo

        return arrayMovie.filter(movie => {
            if (tipoFiltro === 'y') {
                // Filtro por año (limite superior -> mayores o iguales?)
                // El enunciado dice: "limite: valor limite superior de los datos filtrados, 
                // de forma que filtrará todos los datos mayores, iguales que los especificados"
                // Interpretación: >= valor
                return movie.yearestreno >= parseInt(valor);
            } else if (tipoFiltro === 'i') {
                // Filtro por idioma
                return movie.idioma === valor;
            }
            return true;
        });
    }

    /*
        Método: modMovie
        Función: Mapea a objeto simplificado.
        Requisito: Map y desestructuración.
    */
    modMovie(arrayMovie) {
        return arrayMovie.map(({ id, titulo, puntuacion }) => ({ id, titulo, puntuacion }));
    }
}
