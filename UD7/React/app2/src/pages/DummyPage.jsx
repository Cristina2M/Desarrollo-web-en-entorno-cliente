import React, { useState } from 'react'
import Navegacion from '../component/Navegacion'
import DummyCateg from '../component/DummyCateg'
import DummyProductos from '../component/DummyProductos'
import useGet from '../hook/useGet'

export default function DummyPage() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const { data: categories } = useGet('https://dummyjson.com/products/category-list');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    console.log('Categoría elegida:', category);
  };

  return (
    <>
      <Navegacion />
      <div>
        <h1>Categorías de Productos</h1>

        <DummyCateg
          categories={categories}
          onSelectCategory={handleSelectCategory}
        />

        <DummyProductos category={selectedCategory} />
      </div>
    </>
  )
}

