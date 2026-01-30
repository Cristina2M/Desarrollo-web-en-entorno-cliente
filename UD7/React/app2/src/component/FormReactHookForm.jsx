import React from 'react'
import { useForm } from 'react-hook-form';
import Navegacion from './Navegacion';

export default function FormReactHookForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
        <Navegacion />
            <div>Ejemplo de formulario de React Hook Form</div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label> Codigo:
                    <input type="text" name='codigo' {...register("codigo")} />
                </label>
                <br />
                <label> Nombre:
                    <input type="text" name='nombre' {...register("nombre")} />
                </label>
                <br />
                <label> Precio:
                    <input type="number" name='precio' {...register("precio", { required: "Precio es obligatorio", min: { value: 0, message: "precio debe ser >0" }, max: { value: 100, message: "precio debe ser <100" } })}
                        aria-invalid={errors.precio ? "true" : "false"}
                    />
                </label>
                {errors.precio && <p role="alert">{errors.precio.message}</p>}
                <br />
                <br />

                <select {...register("categoria")}>
                    <option value="electronicos">electronicos</option>
                    <option value="informatica">informatica</option>
                    <option value="otros">otros</option>
                </select>

                <input type="submit" value="Enviar" />

            </form>


        </>
    )
}
