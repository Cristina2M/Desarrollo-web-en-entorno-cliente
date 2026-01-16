import React, { useState } from 'react'

export default function ContadorBien() {
    console.log('Renderizando el componente Contador');

    const [contador, setContador] = useState(0);

  return (
    <>
    <div>ContadorBien</div>

    <button onClick={()=> setContador(contador+1)}>Add {contador}</button>
    <button onClick={()=> setContador(contador-1)}>Remove {contador}</button>

    </>
  )
}
