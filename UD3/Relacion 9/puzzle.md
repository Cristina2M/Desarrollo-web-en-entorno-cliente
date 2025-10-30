# Diseño Clase Puzzle

---

```plaintext
Clase Puzzle
    // Propiedades
    dimension            // Tamaño del tablero (ej: 3 para 3x3)
    tablero[ ][ ]        // Array bidimensional que representa la posición de las piezas y el hueco
    posVacia (fila, col) // Posición actual del hueco
    numMovimientos       // Contador de movimientos realizados
    tiempoInicio         // Momento en que empieza la partida
    tiempoFin            // Momento en que se resuelve el puzzle

    // Métodos

    constructor(dimension)
        Inicializar la matriz 'tablero' con valores del 1 al (dimension*dimension - 1) y un hueco
        Mezclar el tablero aleatoriamente (asegurando que es resoluble si se desea)
        Buscar dónde está el hueco y actualizar posVacia
        Establecer numMovimientos a 0
        Guardar tiempoInicio como el momento actual

    mover(direccion)
        // 'direccion' puede ser 'arriba', 'abajo', 'izquierda', 'derecha'
        Si esMovimientoValido(direccion) entonces
            Intercambiar el hueco con la pieza adyacente en esa dirección
            Actualizar posVacia
            Incrementar numMovimientos
        Si no, mostrar mensaje: "Movimiento no válido"

    esMovimientoValido(direccion)
        // Comprueba si el hueco se puede mover en la dirección indicada
        Dependiendo de la posicion de posVacia y la 'direccion', devolver verdadero o falso

    dibujar()
        // Muestra el tablero por consola usando bucles
        Por cada fila del tablero:
            Mostrar las piezas y el hueco de forma legible

    haGanado()
        // Comprueba si el tablero está ordenado de la forma correcta
        Comprobar si los números están en orden ascendente y el hueco al final

    obtenerTiempo()
        // Calcula el tiempo empleado en resolver el puzzle
        tiempoFin = tiempo actual
        devolver tiempoFin - tiempoInicio
```


---

## Explicación lógica:

- El **constructor** prepara el tablero con piezas y hueco, lo mezcla aleatoriamente y pone los contadores a cero.
- El método `mover(direccion)` intenta mover el hueco en la dirección indicada si es válido, y actualiza el número de movimientos.
- `esMovimientoValido()` verifica que el hueco no salga de los límites del tablero.
- `dibujar()` imprime el tablero en la consola (útil para pruebas y depuración).
- `haGanado()` permite comprobar si el puzzle está ordenado correctamente.
- `obtenerTiempo()` da el tiempo total desde que empezó la partida.
