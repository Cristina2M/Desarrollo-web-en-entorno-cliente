import React, { useState } from 'react'
import db from '../json/dbFakestoreapi.json'
import CardProductos from './CardProductos';

export default function CarruselProductos() {

    const [idProducto, setIdProducto] = useState(1);

    if (idProducto === 0) {
        setIdProducto(idProducto+20);
    }

    if (idProducto === 21) {
        setIdProducto(idProducto-20);
    }

    const productoEncontrado = db.productus.find(p => p.id === idProducto);

  return (
    <>
    <div>CarruselProductos</div>

    <CardProductos key={db.productus.id} producto={productoEncontrado}/>

    <button onClick={()=> setIdProducto(idProducto+1)}>+</button>
    <button onClick={()=> setIdProducto(idProducto-1)}>-</button>
    </>
  )
}
