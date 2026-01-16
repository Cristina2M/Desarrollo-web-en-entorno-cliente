import React from 'react'
import Card from './Card'
import db from '../json/dbFakestoreapi.json'

export default function Grid() {
    const arProductos = ['Producto 1', 'Producto 2', 'Producto 3']
    // console.log(db.productus);
  return (
    <div>

    {/* <ul>
        <Card producto='nombre del producto' pvp='11'>
          <p>Producto de prueba</p>
        </Card>
        <li>{arProductos[0]}</li>
        <li>{arProductos[1]}</li>
        <li>{arProductos[2]}</li> 
    </ul> */}

    <ul>Lista de productos
          {/* <Card producto={db.productus[0]}/>
          <Card producto={db.productus[1]}/>
          <Card producto={db.productus[2]}/> */}


            {/* ¡OJO! MUY IMPORTANTE EL MAP EN REACT Y EL USO DE LAS {} */}
          {db.productus.map((producto) => (
            // <p>{producto.title}</p>
            <Card key={producto.id} producto={producto}/>
            // le ponemos el key para que se diferencie de otros nodos, si no lo ponemos nos salta un aviso en la consola que dice que nos recomienda poner una key
          ))}

    </ul> 
    </div>
  )
}
