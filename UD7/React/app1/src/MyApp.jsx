import React from 'react'
import Pruebas from './pages/Pruebas';
import Receta from './components/Receta';
import RecetaPage from './pages/RecetaPage';

export default function MyApp() {
    const v = 6;
    console.log(`MyApp component renderizado ${v}`); //aparece dos veces por el <StrictMode> del main.jsx
  return (
    <div>Hola Mundo {v}
        {/* <Pruebas /> */}
        <RecetaPage />
    </div>
  )
}
