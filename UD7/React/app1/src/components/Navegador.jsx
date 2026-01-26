import React from 'react'
import { NavLink } from 'react-router'
import './Navegador.module.css'

export default function Navegador() {
  return (
    <nav>
    <NavLink to="/">Pruebas</NavLink> <br />
    <NavLink to="/receta">Receta Pollo</NavLink> <br />
    <NavLink to="/productos">Card Productos</NavLink> <br />
    <NavLink to="/fetch">Productos fetch</NavLink> <br />
    <NavLink to="/detalle/:id">Detalle Producto</NavLink> <br />
    <NavLink to="/post">Post JSONPlaceholder</NavLink> <br />

    </nav>
  )
}
