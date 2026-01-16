import React from 'react'

export default function ContadorMal() {
    let contador = 0;
    function handleAdd(){
        // console.log('Click en Add');
        contador++;
        
    }
  return (
    <>
        <div>ContadorMal</div>
        <button onClick={handleAdd}>Add {contador}</button>
    </>
  )
}
