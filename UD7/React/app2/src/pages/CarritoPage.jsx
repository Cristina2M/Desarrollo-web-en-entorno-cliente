import React, { useState } from 'react'
import Navegacion from '../component/Navegacion'
import Carrito from '../component/Carrito'

export default function CarritoPage() {

    const [carrito, setCarrito] = useState({
            total: 2,
            items: [
                {
                    id: 10,
                    title: "Soporte TV",
                    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
                    precio: 29.99,
                    cantidad: 1
                },
                {
                    id: 20,
                    title: "Teclado",
                    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
                    precio: 49.99,
                    cantidad: 1
                }
            ]
        })

  return (
    <>
    <Navegacion />

    <div>CarritoPage</div>
    
    <Carrito carrito={carrito} setCarrito={setCarrito}/>

    </>
  )
}
