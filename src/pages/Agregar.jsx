import React, { useState } from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

const Agregar = () => {
  const { register, handleSubmit } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    agregarCancion(data);
  };

  const VolverHome = () => {
    navigate('/Home');
  };


  const agregarCancion = (data) => {
    const ruta = "https://66e44d51d2405277ed13d77a.mockapi.io/Cancion";
    axios.post(ruta, data).then((response) => {
      console.log(response.data);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000); // Ocultar el mensaje después de 3 segundos
    });
  };

  return (
    <div>
      <h1>Formulario para Agregar una canción a la API</h1>
      {showSuccess && <Alert variant="success">Canción agregada correctamente!</Alert>}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formDuracion">
          <Form.Label>Duración</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la duración"
            {...register("Duracion")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formReproduccion">
          <Form.Label>Reproducción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la reproducción"
            {...register("Reproduccion")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTitulo">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el título"
            {...register("Titulo")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCaratula">
          <Form.Label>Carátula</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la carátula"
            {...register("Caratula")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Agregar
        </Button>
        <Button onClick={VolverHome}>Volver</Button>
      </Form>
    </div>
  );
};

export default Agregar;