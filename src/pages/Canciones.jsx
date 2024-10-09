import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from 'react-router-dom';


const Canciones = () =>  {
  const [Canciones, setCanciones] = useState([]);

  const navigate = useNavigate();

  const VolverHome = () => {
    navigate('/Home');
  };

  const irAPaginaAgregar = () => {
    navigate('/Agregar');
  };

  function llamarApi() {
    axios
      .get("https://66e44d51d2405277ed13d77a.mockapi.io/Cancion")
      .then((response) => {
        setCanciones(response.data);  
        console.log(response.data); //obtengo los parametros de la data 
      });
      
    };
  
    useEffect(() => {
    llamarApi(); // Llamar a la API cuando el componente se este puesto
  }, []);


  return (

    <>
    <div>
      <h1>Top Canciones</h1>
      <div className="grid-container">
        
        {Canciones.map((Canciones) => { // por cada elemento en el json
          return (
            <div className="card" key={Canciones.id}>
              <h2>{Canciones.Titulo}</h2>
              <img src={Canciones.Caratula} alt={Canciones.Titulo} />
              <p>Duración: {Canciones.Duracion} minutos</p>
              <p>Género: {Canciones.reproduccion}</p>
            </div>
          );
        })}
      </div>
           
      <button className="button-spacing" onClick={VolverHome}>Volver a Home</button>
      <button onClick={irAPaginaAgregar}>Agregar Nueva Cancion</button>
    </div>
    
    </>
    
    
  );
};


export default Canciones;