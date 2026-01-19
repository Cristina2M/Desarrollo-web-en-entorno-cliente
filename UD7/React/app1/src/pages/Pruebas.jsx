import React from 'react'
import Grid from '../components/Grid'
import ContadorBien from '../components/ContadorBien'
import CarruselProductos from '../components/CarruselProductos'
import ContadorAlumnos from '../components/ContadorAlumnos'
import Navegador from '../components/Navegador'

export default function Pruebas() {
  return (
    <>
    <Navegador />
    <div>
        Página de Pruebas de Clase
        </div>

        {/* <div>
          {/* <Grid /> 
        </div> */}

        {/* <div>
          <CarruselProductos />
        </div> */}

        <div>
          <ContadorAlumnos />
        </div>
    
    </>
    
  )
}
