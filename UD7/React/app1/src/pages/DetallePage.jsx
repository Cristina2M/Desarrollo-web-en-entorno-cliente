import React from 'react'
import { useParams } from 'react-router'
import Navegador from '../components/Navegador'
import DetalleProducto from '../components/DetalleProducto'

export default function DetallePage() {
    const {id}=useParams()
  return (
    <>
    <Navegador />
    <DetalleProducto />
    </>
  )
}
