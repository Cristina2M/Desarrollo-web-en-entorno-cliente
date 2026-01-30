import React from 'react'
import Navegador from '../components/Navegador'
import { useSearchParams } from 'react-router';
import Posts from '../components/Posts';

export default function PostPage() {
      let [searchParams, setSearchParams] = useSearchParams();

        let valor = searchParams.get('search');

      return (
    <>
        <Navegador />
        <h2>PostPage</h2>
        <Posts value={ valor } funcion={ setSearchParams }/>


    </>
  )
}
