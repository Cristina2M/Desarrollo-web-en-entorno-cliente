import React from 'react'
import { useParams } from 'react-router'
import Navegador from '../components/Navegador'

export default function DetallePage() {
    const {id}=useParams()
  return (
    <>
    <Navegador />
    <div>DetallePage {id}</div>
    </>
  )
}
