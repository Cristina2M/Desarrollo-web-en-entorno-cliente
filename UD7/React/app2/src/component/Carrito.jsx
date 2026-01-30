import React, { useState } from 'react'
import addCantidad from '../hook/addCantidad';
import quitarCantidad from '../hook/quitarCantidad';


export default function Carrito({ carrito, setCarrito}) {
    
    

    return (
        <>
            <div>Carrito</div>
            {carrito.items.map((producto) => (
                <div key={producto.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
                    <img
                        src={producto.image}
                        alt={producto.title}
                        style={{ width: '50px' }}
                    />
                    <p>
                        <strong>Título:</strong> {producto.title} |
                        <strong> Precio:</strong> ${producto.precio} |
                        <strong> Cantidad:</strong> {producto.cantidad}
                    </p>
                    <button onClick={() => addCantidad(carrito, setCarrito, producto.id)}>+</button>
                    <button onClick={() => quitarCantidad(carrito, setCarrito, producto.id)}>-</button>
                </div>
            ))}

            <p>Total productos: {carrito.total}</p>

        </>
    )
}
