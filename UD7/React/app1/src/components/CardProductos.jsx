import React from 'react';
import style from './CardProductos.module.css'
import { NavLink } from 'react-router';

export default function CardProductos({ producto }) {


  return (
    <div className={style.div}>
      <h3>{producto.title}</h3>
      <img src={producto.image} className={style.img} />
      <p>
        Precio: {producto.price}
      </p>
      <p>{producto.category}</p>
      <NavLink to={`/detalle/${producto.id}`}>Ver Detalle</NavLink>
    </div>
  )
}
