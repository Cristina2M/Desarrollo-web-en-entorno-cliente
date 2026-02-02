import React from 'react'
import { Link } from 'react-router'
import Navegacion from '../component/Navegacion'

export default function Home() {
  return (
    <>
      <Navegacion />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Bienvenido a App2</h1>
        <p>Esta es la página de pruebas de clase 2</p>
      </div>
    </>
  )
}
