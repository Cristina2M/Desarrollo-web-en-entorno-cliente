/* === Opción a): Modificando Style desde JavaScript === */
function cambiarTema_style(tema) {
    const body = document.body;
    const contenido = document.getElementById('contenido');
    const marco = document.getElementById('marco');
    const ocultable = document.getElementById('parrafo-ocultable');
    const titulo = document.getElementById('titulo-tema');

    if (tema === 'normal') {
        // Estilos para "Tema Normal"
        body.style.backgroundColor = '#fffacd'; // Fondo de la página
        body.style.color = '#000';
        contenido.style.backgroundColor = 'white';
        contenido.style.borderLeft = '10px solid #007bff';
        marco.style.backgroundColor = '#ffff00'; // Fondo del marco
        ocultable.style.display = 'block'; // Mostrar párrafo
        titulo.textContent = 'Tema Normal (Style)';

    } else if (tema === 'minimalista') {
        // Estilos para "Tema Minimalista"
        body.style.backgroundColor = '#ffffff'; // Fondo de la página
        body.style.color = '#000';
        contenido.style.backgroundColor = 'white';
        contenido.style.borderLeft = '1px solid #ccc'; // Borde simple
        marco.style.backgroundColor = '#ffffff';
        ocultable.style.display = 'none'; // Ocultar párrafo
        titulo.textContent = 'Tema Minimalista (Style)';
    }
}

/* === Opción b): Cargando Hoja de Estilo Dinámicamente === */
function cambiarTema_link(tema) {
    const linkElement = document.getElementById('tema-css');
    const titulo = document.getElementById('titulo-tema');

    if (tema === 'normal') {
        linkElement.href = 'normal.css';
        titulo.textContent = 'Tema Normal (Link)';
    } else if (tema === 'minimalista') {
        linkElement.href = 'minimalista.css';
        titulo.textContent = 'Tema Minimalista (Link)';
    }
}