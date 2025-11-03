export class Alumno {
  constructor(id, nombre, notaMedia = 5.0) {
    this.id = id;
    this.nombre = nombre;
    this.notaMedia = Number(notaMedia);
  }
}

export class Colegio {
  constructor(nombre, numeroAulas, numeroAlumnos) {
    this.nombre = nombre;
    this.numeroAulas = Number(numeroAulas);
    this.numeroAlumnos = Number(numeroAlumnos);
    this.alumnos = [];

    for (let i = 0; i < this.numeroAlumnos; i++) {
      const alumno = new Alumno(i, `alumno${i + 1}`, 5.0);
      this.alumnos.push(alumno);
    }
  }

  getAlumnoById(id) {
    const alumno = this.alumnos.find(a => a.id === Number(id));
    if (!alumno) throw new Error(`Alumno con id ${id} no encontrado`);
    return alumno;
  }

  consultarNotaMedia(id) {
    return this.getAlumnoById(id).notaMedia;
  }

  modificarNotaMedia(id, nuevaNota) {
    const alumno = this.getAlumnoById(id);
    alumno.notaMedia = Number(nuevaNota);
    return alumno.notaMedia;
  }
}

export function showCentroEducativo() {
  const colegio = new Colegio('I.E.S. Ilíberis', 3, 5);
  console.log(`Colegio ${colegio.nombre} con ${colegio.numeroAulas} aulas y ${colegio.numeroAlumnos} alumnos`);

  // Consultar notas iniciales
  console.log(`Nota media alumno id 0: ${colegio.consultarNotaMedia(0).toFixed(2)}`);
  console.log(`Nota media alumno id 3: ${colegio.consultarNotaMedia(3).toFixed(2)}`);

  // Modificar y verificar
  colegio.modificarNotaMedia(0, 7.25);
  colegio.modificarNotaMedia(3, 8.5);
  console.log(`Nueva nota media alumno id 0: ${colegio.consultarNotaMedia(0).toFixed(2)}`);
  console.log(`Nueva nota media alumno id 3: ${colegio.consultarNotaMedia(3).toFixed(2)}`);
}


