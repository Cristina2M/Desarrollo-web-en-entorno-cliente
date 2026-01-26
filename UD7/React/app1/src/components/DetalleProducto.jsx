import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import style from './DetalleProducto.module.css'
import useGet from '../hooks/useGet';
import { FaSpinner } from 'react-icons/fa';


export default function DetalleProducto() {
    const { id } = useParams();


const {data, cargando} = useGet(`https://fakestoreapi.com/products/${id}`)


    if(cargando){
       return (
        <>
            <h1 className={style.h1}>Detalle del Producto</h1>
       <FaSpinner className= {style.spinner}/>
       </>
    );
    }

let producto = data[0];
  return (
    <>
    <div className={style.container}>
            <h1 className={style.mainTitle}>Detalle del Producto</h1>
            
            <div className={style.cardDetalle}>
                <div className={style.colImage}>
                    <img src={producto.image} alt={producto.title} className={style.img} />
                </div>
                
                <div className={style.colInfo}>
                    <span className={style.category}>{producto.category}</span>
                    <h2 className={style.title}>{producto.title}</h2>
                    <p className={style.description}>{producto.description}</p>
                    <p className={style.price}>${producto.price}</p>
                </div>
            </div>
        </div>

    </>
  )
}
