import React, { useState } from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

//UseForm es un hook para poder utilizar metodos que puedan validar los campos del formulario
//Form para poder diseñar el formulario

function Agregar() {
  const {  register, handleSubmit, formState: { errors } } = useForm(); 
  //llamamos al hook userForm para utilizar los metodos   de validacion de los campos del formulario
  //register: registra los campos y los valida
  //handlesubmit: para poder enviar los datos del formulario
  //formState: {errors} : se encarga de los errores que puedan presentar el formulario como campos vacios o datos incorrectos

  
  const [successMessage, setSuccessMessage] = useState('');
  //aqui ocupamos useState para almacenar un mensaje de exito al agregar una cancion
  
  const navigate = useNavigate();

  

  //aqui resivimos los datos del formulario
  //y los agrega a la API que es agregarCancion
  const onSubmit = (data) => {
    agregarCancion(data);
    console.log(data);
    
  };

  const Volver = () => {
    navigate('/Canciones');
  };

 
  

  //hacemos peticion post a la API para agregar una cancion
  //lo unico diferente es que se necesita como argumento la data que es la que envias a la api

  function agregarCancion(data) {
  axios.post("https://66e44d51d2405277ed13d77a.mockapi.io/Cancion", data)
    .then((response) => {
      console.log(response.data);
     
      setSuccessMessage('Canción agregada exitosamente');
    });
  }

  
  
  
  //utilizamos form.group que es de bootstrap para poder hacer el formulario
  //el ...register te recupera lo que escribes dentro de el 
  //recuperar y hacer tal cosa , handleSubmit nos devuelve el hub y guardamos en la data de la API
  //podemos agregar un objeto dentro del metodo register para validar si el campo es requerido
  return (
    <div>
      <h1>Agregar canción a la API</h1>
      
      
      <form onSubmit={handleSubmit(onSubmit)}> 
        
        
        <Form.Group className="mb-3">
          <Form.Label>Nombre de la canción</Form.Label>
          <Form.Control type="text"  placeholder="Ingresar Canción" {...register('Titulo',
            {required :true})}/>
            {errors.Titulo?.type === 'required' && <p>Campo requerido</p>}

          
          
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Duracion</Form.Label>
          <Form.Control type="number" name= "Duracion" placeholder="Ingresar Duración" {...register("Duracion",
            {required :true})}/>
            {errors.Titulo?.type === 'required' && <p>Campo requerido</p>}
          
        </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label>Reproduccion</Form.Label>
          <Form.Control type="number" name= "reproduccion" placeholder="Ingresar Reproduccion" {...register("reproduccion",
            {required :true})}/>
            {errors.Titulo?.type === 'required' && <p>Campo requerido</p>}
          


        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Caratula</Form.Label>
          <Form.Control type="text" name= "Caratula" placeholder="Ingresar Link de imagen" {...register("Caratula",
            {required :true})}/>
            {errors.Titulo?.type === 'required' && <p>Campo requerido</p>}
          


        </Form.Group>

       <button type = "submit" value="enviar"  >Agregar</button>

      </form>
      {successMessage && <p>{successMessage}</p>}
      
      
      <button className="button-spacing" onClick={Volver}>Volver</button>
      
      
    </div>
  );
};

export default Agregar;