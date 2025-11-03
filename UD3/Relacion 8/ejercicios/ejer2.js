// Función constructora (estilo clásico)
export function TelefonoConstructor(numero) {
  this.numero = String(numero);
  this.llamadas = 0;
  this.llamar = function () {
    this.llamadas += 1;
    return this.llamadas;
  };
}

// Clase moderna
export class Telefono {
  constructor(numero) {
    this.numero = String(numero);
    this.llamadas = 0;
  }
  llamar() {
    this.llamadas += 1;
    return this.llamadas;
  }
}

export function showTelefono() {
  const t1 = new TelefonoConstructor('600111222');
  t1.llamar();
  t1.llamar();
  console.log(`Constructor -> ${t1.numero} llamadas: ${t1.llamadas}`);

  const t2 = new Telefono(933123123);
  for (let i = 0; i < 3; i++) t2.llamar();
  console.log(`Clase -> ${t2.numero} llamadas: ${t2.llamadas}`);
}


