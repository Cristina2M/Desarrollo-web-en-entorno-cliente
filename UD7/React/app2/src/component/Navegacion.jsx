import React from 'react'
import { NavLink } from 'react-router'
import './Navegacion.module.css'

export default function Navegacion() {
  return (
    <nav>
      <NavLink to="/">Inicio</NavLink> <br />
      <NavLink to="/formulario">Formulario</NavLink> <br />
      <NavLink to="/formulario/rhf">Formulario React Hook Form</NavLink> <br />
      <NavLink to="/carrito">Carrito</NavLink> <br />
      <NavLink to="/debounce">Debounce</NavLink> <br />
      <NavLink to="/login">Login</NavLink> <br />
      <NavLink to="/dummy">API Dummy</NavLink> <br />
    </nav>
  )
}
