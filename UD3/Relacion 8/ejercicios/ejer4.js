export class Casa {
  constructor(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;

    const mensaje = `Nueva casa en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codigoPostal}.`;
    console.log(mensaje);
  }

  setNumero(numero) {
    this.numero = numero;
  }

  setCalle(calle) {
    this.calle = calle;
  }

  setCodigoPostal(codigo) {
    this.codigoPostal = codigo;
  }

  imprimeCalle() {
    return this.calle;
  }

  imprimeNumero() {
    return this.numero;
  }

  imprimeCodigoPostal() {
    return this.codigoPostal;
  }
}

export function showViviendas() {
  const casaA = new Casa('Garcia Prieto', 58, '15706');
  const casaB = new Casa('Camino Caneiro', 29, '32004');
  const casaC = new Casa('San Clemente', 's/n', '15705');

  console.log(`El código postal de la casaA es: ${casaA.imprimeCodigoPostal()}.`);
  console.log(`La calle de la casaC es: ${casaC.imprimeCalle()}.`);
}


