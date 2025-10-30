# Diseño Clase TresEnRaya


---

```plaintext
Clase TresEnRaya
    // Propiedades
    tablero[ ][ ]        // Array bidimensional 3x3 que representa el estado del juego
    jugadorActual        // Marca el jugador que tiene el turno ('X' o 'O')
    hayGanador           // Indica si ya hay un ganador (true/false)
    numMovimientos       // Contador de movimientos realizados

    // Métodos

    constructor()
        Inicializar el tablero 3x3 como vacío
        Seleccionar aleatoriamente jugadorActual ('X' o 'O')
        Establecer hayGanador en false
        Establecer numMovimientos a 0

    jugar(fila, columna)
        // Intenta hacer un movimiento en la casilla especificada
        Si la casilla [fila][columna] está vacía y no hay ganador entonces
            Colocar la marca del jugadorActual en la casilla
            Incrementar numMovimientos
            Si comprobarGanador() entonces
                Establecer hayGanador en true
            Si no, cambiarTurno()
        Si no, mostrar mensaje: "Movimiento no válido"

    cambiarTurno()
        // Cambia el jugador que tiene el turno ('X' <-> 'O')
        Si jugadorActual == 'X' entonces jugadorActual = 'O', si no, jugadorActual = 'X'

    comprobarGanador()
        // Verifica si algún jugador tiene tres marcas en línea
        Comprobar filas, columnas y diagonales
        Si hay tres en línea con la misma marca, devolver true
        Si no, devolver false

    esEmpate()
        // Devuelve true si todas las casillas están llenas y no hay ganador
        Si numMovimientos == 9 y hayGanador == false, devolver true
        Si no, devolver false

    dibujar()
        // Muestra el tablero por consola
        Por cada fila del tablero:
            Mostrar las marcas y casillas de forma legible
```

---


