import React from 'react'
import Pruebas from './pages/Pruebas';

export default function MyApp() {
    const v = 6;
    console.log(`MyApp component renderizado ${v}`); //aparece dos veces por el <StrictMode> del main.jsx
  return (
    <div>Hola Mundo {v}
        <Pruebas />
    </div>
  )
}
