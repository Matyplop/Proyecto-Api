import React, { useEffect } from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function Editar() {
  const { id } = useParams(); // Obtenemos el id de la cancion para editar
                                // por ende sacamos los parametros de id con useParams
  const navigate = useNavigate();
  
  const { register, handleSubmit, setValue} = useForm(); 
  //handleSubmit: para poder enviar los datos del formulario
  //register: registra los campos del formulario. como que los valida
  //setValue: para poder guardar los datos de la cancion en los campos del formulario
  //formState: {errors} : se encarga de los errores que puedan presentar el formulario.

  //aqui utilizo UseEffect para llamar a la API y obtener los datos de la cancion
  //entonces cada vez que responde se guarda en data  (response.data)
  //
  useEffect(() => {
    axios.get(`https://66e44d51d2405277ed13d77a.mockapi.io/Cancion/${id}`)
      .then((response) => {
        const data = response.data;
        // aqui con setValue guardo los datos de la cancion en los campos del formulario
        //con esto podemos ver ya la informacion que esta por defecto y poder editarla
        //ademas sirve para pre cargar los datos en el formulario  
        //titulo es lo que sale en register y data.Titulo es lo que viene de la API
        setValue('Titulo', data.Titulo);
        setValue('Duracion', data.Duracion);
        setValue('Autor', data.Autor);
        setValue('Caratula', data.Caratula);
      });
  }, [id, setValue]); //si esto cambia , que es lo que hace se vuelve a ejecutar

  //aqui obtenemos los datos del formulario y los enviamos a la API que es editarcancion
  const onSubmit = (data) => {
    editarCancion(data);
    console.log(data);
  };

  // Petición PUT para actualizar la canción
  // utilizamos la id para poder saber que cancion editar
  const editarCancion = (data) => {
    axios.put(`https://66e44d51d2405277ed13d77a.mockapi.io/Cancion/${id}`, data)
      .then((response) => {
        console.log(response.data);
        navigate("/Canciones"); // al hacer la peticion se vá a la pagina canciones
      });
  };

  const Volver = () => {
    navigate('/Canciones');
  };

  //onSubmit es la función que se ejecuta al enviar el formulario. 
  //esto en via los datos a la API
  //register:  registra los campos del formulario. como que los valida 

  return (
    <>
      <h1>Editar Canción</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre de la canción</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingresar Canción" 
            {...register('Titulo', { required: true })} 
          />
          
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Duración</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Ingresar Duración" 
            {...register('Duracion', { required: true })} 
          />
          
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Autor</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingresar Autor" 
            {...register('Autor', { required: true })} 
          />
          
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Carátula</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingresar Link de Imagen" 
            {...register('Caratula', { required: true })} 
          />
          
        </Form.Group>

        <button type="submit">Guardar Cambios</button>
      </form>

      <button className="button-spacing" onClick={Volver}>Volver</button>
    </>
  );
}

export default Editar;
