import { useState } from 'react'
import { Route, Routes } from 'react-router';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Formularioage from './pages/Formularioage'
import FormReactHookForm from './component/FormReactHookForm';
import CarritoPage from './pages/CarritoPage';
import ProductosPageDebounce from './pages/ProductosPageDebounce';
import Login from './pages/Login';
import DummyPage from './pages/DummyPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formularioage />} />
        <Route path="/formulario/rhf" element={<FormReactHookForm />} />
        <Route path="/carrito" element={<CarritoPage />} />
        <Route path="/debounce" element={<ProductosPageDebounce />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dummy" element={<DummyPage />} />
      </Routes>
    </>
  )
}

export default App

