import React from 'react'

export default function IngredientesReceta({ ingredientes }) {
  return (
    <>
      {ingredientes.map((ingrediente, index) => (
        <li key={index}> {ingrediente.cantidad} {ingrediente.unidad} {ingrediente.elemento}</li>
      ))}
    </>
  )
}
