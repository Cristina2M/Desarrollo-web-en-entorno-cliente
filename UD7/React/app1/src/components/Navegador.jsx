import React from 'react'
import { NavLink } from 'react-router'

export default function Navegador() {
  return (
    <>
    <NavLink to="/">Pruebas</NavLink> <br />
    <NavLink to="/receta">Receta Pollo</NavLink>
    </>
  )
}
