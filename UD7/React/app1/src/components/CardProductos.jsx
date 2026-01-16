import React from 'react';
import style from './CardProductos.module.css'

export default function CardProductos({ producto }) {


  return (
    <div className={style.div}>
      <h3>{producto.title}</h3>
      <img src={producto.image} alt=""  className={style.img} />
      <p>
        Precio: {producto.price}
      </p>
      <p>{producto.category}</p>
    </div>
  )
}
