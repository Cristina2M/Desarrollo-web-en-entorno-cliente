// Objeto literal persona con método para mayoría de edad
export const personaLiteral = {
  nombre: 'Ana',
  edad: 19,
  esMayorDeEdad() {
    return this.edad >= 18;
  }
};

// Función constructora (estilo clásico)
export function PersonaConstructor(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.esMayorDeEdad = function () {
    return this.edad >= 18;
  };
}

// Clase moderna Persona
export class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  esMayorDeEdad() {
    return this.edad >= 18;
  }
}

// Edad promedio del array de personas
export function calcularEdadPromedio(personas) {
  if (!Array.isArray(personas) || personas.length === 0) return 0;
  const total = personas.reduce((acc, p) => acc + Number(p.edad || 0), 0);
  return Number((total / personas.length).toFixed(2));
}

export function showPersonas() {
  // Demostración objeto literal
  console.log(`Literal -> ${personaLiteral.nombre} es mayor de edad: ${personaLiteral.esMayorDeEdad()}`);

  // Demostración función constructora
  const juan = new PersonaConstructor('Juan', 17);
  const lucia = new PersonaConstructor('Lucía', 22);
  console.log(`Constructor -> ${juan.nombre} mayor de edad: ${juan.esMayorDeEdad()}`);
  console.log(`Constructor -> ${lucia.nombre} mayor de edad: ${lucia.esMayorDeEdad()}`);

  // Demostración clase
  const pedro = new Persona('Pedro', 30);
  const maria = new Persona('María', 16);

  // Array de varias personas
  const grupo = [juan, lucia, pedro, maria];

  // Calcular edad promedio
  const promedio = calcularEdadPromedio(grupo);
  console.log(`Promedio edades del grupo: ${promedio}`);

  // Uso de find/filter/sort como práctica adicional
  const mayores = grupo.filter(p => p.esMayorDeEdad());
  const porEdadAsc = [...grupo].sort((a, b) => a.edad - b.edad);
  const buscado = grupo.find(p => p.nombre === 'Lucía');
  console.log(`Mayores: ${mayores.map(p => p.nombre).join(', ')}`);
  console.log(`Orden por edad: ${porEdadAsc.map(p => `${p.nombre}(${p.edad})`).join(' - ')}`);
  console.log(`Find 'Lucía': ${buscado ? buscado.nombre : 'no encontrada'}`);
}


