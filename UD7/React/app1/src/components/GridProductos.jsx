import React from 'react'
import db from '../json/dbFakestoreapi.json'
import CardProductos from './CardProductos'
import style from './GridProductos.module.css'
import Navegador from './Navegador'

export default function GridProductos() {
  return (
    <div>
      <Navegador />
        <h1 className={style.h1}>Lista de productos</h1>
        
          {db.productus.map((producto) => (
            <CardProductos key={producto.id} producto={producto}/>
          ))}
    </div>
  )
}
