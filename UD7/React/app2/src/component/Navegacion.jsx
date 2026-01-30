import React from 'react'
import { NavLink } from 'react-router'

export default function Navegacion() {
  return (
    <>
      <NavLink to="/formulario">Formulario</NavLink> <br />
      <NavLink to="/formulario/rhf">Formulario React Hook Form</NavLink> <br />
      <NavLink to="/carrito">Carrito</NavLink> <br />
    </>
  )
}
