import React, { useState } from 'react'

export default function DummyCateg({ categories, onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <form>
      <div>
        <select value={selectedCategory} onChange={handleChange}>
          <option value="">-- Lista de todas las categorías --</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}
