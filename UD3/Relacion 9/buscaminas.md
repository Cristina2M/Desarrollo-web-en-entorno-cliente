# Diseño Clase Buscaminas

---

```plaintext
Clase Buscaminas
    // Propiedades
    tablero[ ][ ]            // Array bidimensional 8x8 con información de casillas (mina, número o vacía)
    minas                    // Número total de minas (10)
    descubiertas             // Número de casillas descubiertas
    tiempoInicio             // Momento en que empieza la partida
    tiempoFin                // Momento en que se acaba o pierde
    tiempoLimite             // Tiempo máximo permitido (segundos o minutos)
    juegoTerminado           // Indica si la partida ya acabó (true/false)

    // Métodos

    constructor()
        Inicializar tablero 8x8, colocar 10 minas aleatoriamente
        Calcular los números de minas alrededor de cada casilla
        Establecer descubiertas a 0
        Guardar tiempoInicio
        Definir tiempoLimite
        Establecer juegoTerminado en false

    descubrir(fila, columna)
        // Descubre una casilla, puede activar más descubrimientos
        Si juegoTerminado entonces
            Mostrar mensaje: "La partida ha terminado"
        Si la casilla [fila][columna] es una mina entonces
            Mostrar mensaje: "¡Has perdido!"
            Guardar tiempoFin
            Establecer juegoTerminado en true
        Si la casilla tiene número
            Marcar como descubierta
            Incrementar descubiertas
        Si la casilla está vacía
            Descubrir recursivamente las casillas vecinas vacías
            Incrementar descubiertas según corresponda
        Si todas las casillas sin mina están descubiertas
            Mostrar mensaje: "¡Has ganado!"
            Guardar tiempoFin
            Establecer juegoTerminado en true

    marcarMina(fila, columna)
        // Marca una casilla como posible mina (bandera)
        Cambia el estado de la casilla

    dibujar()
        // Muestra el tablero por consola
        Por cada fila:
            Mostrar el estado actual de las casillas (descubierta, mina, bandera, etc.)

    haSuperadoTiempoLimite()
        // Devuelve true si se ha excedido el tiempo límite
        Comparar tiempo actual con tiempoInicio + tiempoLimite

    minasAlrededor(fila, columna)
        // Devuelve el número de minas adyacentes a una casilla
        Contar minas entre las 8 casillas vecinas
```

