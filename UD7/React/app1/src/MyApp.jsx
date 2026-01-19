import React from 'react'
import Pruebas from './pages/Pruebas';
import Receta from './components/Receta';
import RecetaPage from './pages/RecetaPage';
import { Route, Routes } from 'react-router';

export default function MyApp() {
    const v = 6;
    console.log(`MyApp component renderizado ${v}`); //aparece dos veces por el <StrictMode> del main.jsx
  return (
    <Routes>
      <Route path="/" element={<Pruebas />} />
      <Route path="/receta" element={<RecetaPage />} />
    </Routes>
  )
}
