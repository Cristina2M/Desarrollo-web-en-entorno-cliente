import React, { useState } from 'react'

export default function ContadorAlumnos() {

    const [alumnos, setAlumnos] = useState({clase:'2 DAW', nalumnos:0});

    const añadir = () => {
        setAlumnos({ ...alumnos, nalumnos: alumnos.nalumnos+1})
    }

  return (
    <>
    <div>ContadorAlumnos</div>

    <p>En la clase {alumnos.clase} hay {alumnos.nalumnos} alumnos</p>

    <button onClick={añadir}>Añadir alumno</button>
    </>
  )
}
