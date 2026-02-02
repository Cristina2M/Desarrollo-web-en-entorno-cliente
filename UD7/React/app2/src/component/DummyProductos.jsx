import React, { useState, useEffect } from 'react'

export default function DummyProductos({ category }) {
  const [products, setProducts] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (!category) {
      setProducts([]);
      return;
    }

    setCargando(true);
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(response => response.json())
      .then(data => {
        console.log('Productos:', data);
        setProducts(data.products || []);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setCargando(false);
      });
  }, [category]);

  if (!category) {
    return <p>Elije una categoría para ver los productos</p>;
  }

  if (cargando) {
    return <p>Cargando productos...</p>;
  }

  if (products.length === 0) {
    return <p>No hay productos disponibles</p>;
  }

  return (
    <div>
      <h2>Productos de {category}</h2>
      {products.map((product) => (
        <div key={product.id} style={{
          border: '1px solid #ccc',
          padding: '10px',
          width: '820px',
          margin: '10px 0'
        }}>
          <h3>{product.title}</h3>
          <p>Precio: ${product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  )
}
