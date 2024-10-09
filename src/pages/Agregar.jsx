import React, { useState } from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';


import { useNavigate } from 'react-router-dom';

const Agregar = () => {
  const {  register, handleSubmit, formState: { errors } } = useForm();  //llamamos a useForm para usar el hook de form
  //registrar los campos del formulario , handleSubmit para manejar el envío del formulario
  //formState para manejar el estado del formulario , los errores
  const [successMessage, setSuccessMessage] = useState('');

  
  const navigate = useNavigate();

  

  //aqui resivimos los datos del formulario
  const onSubmit = (data) => {
    agregarCancion(data);
    console.log(data);
    
  };

  const Volver = () => {
    navigate('/Canciones');
  };
  

  
  const agregarCancion = (data) => {
    const ruta = "https://66e44d51d2405277ed13d77a.mockapi.io/Cancion";
    axios.post(ruta, data).then((response) => {
      console.log(response.data);
      setSuccessMessage('Canción agregada exitosamente');
      
     
    });
  };

  
  
  
  //utilizamos form.group que es de bootstrap para poder hacer el formulario
  //el ...register te recupera lo que escribes dentro de el 
  //recuperar y hacer tal cosa , handleSubmit nos devuelve el hub
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
          <Form.Control type="text" name= "Duracion" placeholder="Ingresar Duración" {...register("Duracion",
            {required :true})}/>
            {errors.Titulo?.type === 'required' && <p>Campo requerido</p>}
          
        </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label>Reproduccion</Form.Label>
          <Form.Control type="text" name= "reproduccion" placeholder="Ingresar Reproduccion" {...register("reproduccion",
            {required :true})}/>
            {errors.Titulo?.type === 'required' && <p>Campo requerido</p>}
          


        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Caratula</Form.Label>
          <Form.Control type="file" accept= "image/*" {...register("Caratula",
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