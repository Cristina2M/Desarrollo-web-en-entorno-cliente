import React from 'react'
import { useState } from 'react'

export default function FormularioArticulos() {
  const [formulario, setFormulario] = useState({ codigo: "", nombre: "" })


  const handleChange = (e) => {
    setFormulario({...formulario, [e.target.name]: e.target.value.toUpperCase()});
  };


  return (
    <>
    <br />
      <div>FormularioArticulos</div>

      <form>
        <label> Codigo:
          <input type="text" name='codigo' value={formulario.codigo} onChange={handleChange} />
        </label>
        <br />
        <label> Nombre:
          <input type="text" name='nombre' value={formulario.nombre} onChange={handleChange} />
        </label>
        <br />
      </form>
      <p>Valor del codigo: {formulario.codigo}</p>
      <p>Valor del nombre: {formulario.nombre}</p>
    </>

  )
}
