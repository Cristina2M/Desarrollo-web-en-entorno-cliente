import React, { useEffect, useState } from 'react'
import CardProductos from './CardProductos'
import style from './Grid2.module.css'


import { FaSpinner } from "react-icons/fa";
import useGet from '../hooks/useGet';


export default function Grid2({ value, funcion }) {
    // const [productos, setProductos] = useState([]);
    // const [cargando, setCargando] = useState(true);


    // function getData() {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data); 
    //             setProductos([...data]);
    //         });
    // }

    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data); 
    //             setProductos([...data]);
    //             setCargando(false)
    //         });
    // }, []);

    // const {data, cargando} = useGet('https://fakestoreapi.com/products');
        const {data, cargando} = useGet('http://localhost:3000/productus');


    if(cargando){
       return (
        <>
            <h1 className={style.h1}>Lista de productos</h1>
       <FaSpinner className= {style.spinner}/>
       </>
    );
    }

    const productosFiltrados = data.filter(producto => {
        if (!value) return true;
        return producto.title.toLowerCase().includes(value.toLowerCase());
    });

    return (
        <div>
            <h1 className={style.h1}>Lista de productos</h1>
            <form>
                <input type="text" id='inputSearch'/>
                <button onClick={(e)=>{
                    e.preventDefault();
                    const para=document.getElementById('inputSearch').value
                    console.log('Para:', para)
                    funcion({search: para})
                }}>Buscar</button>
            </form>
            {/* <button onClick={getData}>Cargar Productos</button> */}

            <p>Valor del search: {value}</p>

            {productosFiltrados.map((producto) => (
                <CardProductos key={producto.id} producto={producto} />
            ))}
        </div>
    )
}