import React, { useState, useEffect } from "react";
import axios from "axios"; //peticiones HTTP
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import { set } from "react-hook-form";
//useNavigate usa las rutas que estan en el Router en app.jsx para navegar entre paginas
//useState: lo utilizo para almacenar las canciones que obtengo de la API
//useEffect: lo utilizo para llamar a la API cuando el componente se monte , como esta vacio se ejecuta una sola vez
//llamarApi() : hace petición a la API usando axios.get
//map() : // itera por cada elemento de la array Canciones y devuelve un div con la info de cada cancion

function Canciones() {
  
  
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
        setCanciones(response.data); //aqui recibo los datos de la api para actualizar el estado  
        console.log(response.data); //obtengo los parametros de la data 
      });
      
    };
  
    useEffect(() => {
    llamarApi(); // Llamar a la API cuando el componente se este puesto
  }, []);


  function EliminarCancion(id) {
  axios.delete(`https://66e44d51d2405277ed13d77a.mockapi.io/Cancion/${id}`)
    .then((response) => {
      setCanciones(Canciones.filter(Canciones => Canciones.id !== id));
      //esto hace que se tenga que actualizar solo cada ves que se elimine una cancion
      //por ejemplo si se selecciona la id 2 , queda solo la id 1 y 3
      //por ende si canciones.id es distinto  a id , se actualiza el estado
      console.log(response.data);
    });
}


  return (

    <>
    <div>
      <h1>Top Canciones</h1>
      <button className="button-spacing" onClick={VolverHome}>Volver a Home</button>
      <button onClick={irAPaginaAgregar}>Agregar Nueva Cancion</button>
      
      

      <div className="grid-container">
        
        {Canciones.map((Canciones) => { 
          return (
            <div className="card" key={Canciones.id}>
              <h2>{Canciones.Titulo}</h2>
              <img src={Canciones.Caratula} alt={Canciones.Titulo} />
              <p>Duración: {Canciones.Duracion} minutos</p>
              <p>Género: {Canciones.reproduccion}</p>
              <button onClick={() => EliminarCancion(Canciones.id)}>Eliminar Cancion</button>
              
            </div>
           
          );
        })}
      </div>
           
      
    </div>
    
    </>
    
    
  );
};


export default Canciones;