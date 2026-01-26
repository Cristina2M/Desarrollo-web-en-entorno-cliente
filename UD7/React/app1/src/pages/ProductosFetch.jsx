import React from 'react'
import Navegador from '../components/Navegador'
import Grid2 from '../components/Grid2'
import { useSearchParams } from 'react-router'

export default function ProductosFetch() {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get('search'));
  console.log('Parametro', searchParams.toString())

  let valor = searchParams.get('search');
  return (
    <>
      <Navegador />
      <Grid2 value={valor} funcion={setSearchParams}/>
    </>

  )
}