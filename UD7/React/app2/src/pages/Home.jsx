import React from 'react'
import { Link } from 'react-router'
import Navegacion from '../component/Navegacion'

export default function Home() {
  return (
    <>
      <Navegacion />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Bienvenido a App2</h1>
        <p>Esta es la página de inicio</p>
        <Link to="/formulario" style={{ 
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#646cff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px'
        }}>
          Ir al Formulario
        </Link>
      </div>
    </>
  )
}
