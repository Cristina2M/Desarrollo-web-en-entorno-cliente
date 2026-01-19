import React, { useState } from 'react'

export default function FormReceta({ ingredientes, setIngredientes }) {

    const añadirIngrediente = (e) => {
        e.preventDefault();
        let cantidad = document.getElementById("cantidad").value;
        let unidad = document.getElementById("unidad").value;
        let elemento = document.getElementById("elemento").value;

        let nuevoIngrediente = { cantidad, unidad, elemento };
        setIngredientes([...ingredientes, nuevoIngrediente]);
    }

    return (
        <>
            <form>
                Cantidad:
                <input type="text" id="cantidad" />
                <br />
                Unidad:
                <input type="text" id="unidad" />
                <br />
                Elemento:
                <input type="text" id="elemento" />
                <br />
                <button onClick={añadirIngrediente}>Añadir Producto</button>
            </form>
        </>
    )
}
