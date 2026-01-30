import { useState } from 'react'
import { Route, Routes } from 'react-router';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Formularioage from './pages/Formularioage'
import FormReactHookForm from './component/FormReactHookForm';
import CarritoPage from './pages/CarritoPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formularioage />} />
        <Route path="/formulario/rhf" element={<FormReactHookForm />} />
        <Route path="/carrito" element={<CarritoPage />} />
      </Routes>
    </>
  )
}

export default App

