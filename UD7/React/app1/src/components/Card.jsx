import React from 'react';
import style from './Card.module.css';

// export default function Card({producto, pvp, children}) {
  export default function Card({producto}) {
  //   if (producto.price>100) {
  //     return (
  //   <li>
  //     <h3>{producto.title}</h3>
  //     <p>Precio: <b> {producto.price}</b></p>
  //     <p>{producto.category}</p>
  //   </li>
  // )
  //   }

  return (
    <li>
      {/* Card {producto} {pvp}
    {children} * Es lo que añadimos entre las etiquetas Card en el Grid */}


    <h3 style={{color:"orange"}}>{producto.title}</h3>
    <p className={style.p2}>
      Precio: {producto.price>100 ?producto.price+' Oferta' :producto.price}
      {producto.price>100 && '✅'}
      {/* {producto.price>100 && producto.price%2==0 && '✅'} solo a los mayores de 100 que sean pares*/}
      {/* {producto.price>100 || '✅'} se usa para cuando quieras que sea falso, es decir que el precio no sea mayor a 100 en este caso*/}
    </p>
    <p className={style.p}>{producto.category}</p>


    
    </li>
  )
}
