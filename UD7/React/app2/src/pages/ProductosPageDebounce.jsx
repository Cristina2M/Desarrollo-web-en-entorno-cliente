import React, { useState, useEffect } from 'react'
import Grid2 from '../component/Grid2'
import { useSearchParams } from 'react-router';
import Navegacion from '../component/Navegacion';
import { useDebounce } from '../hook/useDeboune';

// mirar en react - ud2-25 - app2 - src - pages - productopagedebounce.jsx

export default function ProductosPageDebounce() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('search') || '');

  console.log(searchParams);
  console.log(searchParams.get('search'));
  console.log('Parametro', searchParams.toString())

  // Debounce del valor del input
  const searchDebounce = useDebounce(inputValue, 1500);

  // Actualizar los searchParams cuando cambie el valor debounced
  useEffect(() => {
    if (searchDebounce !== null) {
      if (searchDebounce === '') {
        setSearchParams({});
      } else {
        setSearchParams({ search: searchDebounce });
      }
    }
  }, [searchDebounce, setSearchParams]);

  return (
    <>
      <Navegacion />

      <h1>Lista de productos</h1>
      <form>
        <input
          type="text"
          id='inputSearch'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Buscar productos..."
        />

      </form>



      <Grid2 value={searchParams.get('search')} funcion={setSearchParams} />
    </>

  )
}


