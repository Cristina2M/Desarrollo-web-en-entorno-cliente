import React from 'react'
import db from '../json/dbFakestoreapi.json'
import CardProductos from './CardProductos'
import style from './GridProductos.module.css'

export default function GridProductos() {
  return (
    <div>
        <h1 className={style.h1}>Lista de productos</h1>
        
          {db.productus.map((producto) => (
            <CardProductos key={producto.id} producto={producto}/>
          ))}
    </div>
  )
}
