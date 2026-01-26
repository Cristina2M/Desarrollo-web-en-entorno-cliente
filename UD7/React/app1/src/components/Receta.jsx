import React, { useState } from 'react'
import IngredientesReceta from './IngredientesReceta'
import FormReceta from './FormReceta'
import Navegador from './Navegador';

export default function Receta() {
    const arIngredientes = [
        { cantidad: 1, unidad: "libra", elemento: "pollo" },
        { cantidad: 2, unidad: "cucharadas", elemento: "aceite" }
    ];

    const [ingredientes, setIngredientes] = useState(arIngredientes);

    return (
        <>
            <div>Receta de cocina</div>
            <h1>Receta Pollo Frito</h1>
            <IngredientesReceta ingredientes={ingredientes} />
            <FormReceta ingredientes={ingredientes} setIngredientes={setIngredientes} />
        </>
    )
}
