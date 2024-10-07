import React, { useState, useEffect } from "react";  //uno es de efecto y el otro es de estado (son hub)
import axios from "axios"; //importamos axios para poder hacer las peticiones a la api
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom'; //esto es para poder navegar entre paginas cuando se haga click en algun boton

const Home = () => {
  const [user, setUsers] = useState([]);
  const navigate = useNavigate(); 
  //por ejemplo aqui se utiliza solo una etiqueta div
  //renderizar algo en lista con map (de esta forma)
  function llamarApi() {
    axios
      .get("https://66e44d51d2405277ed13d77a.mockapi.io/Cancion")
      .then((response) => {
        setUsers(response.data);  
        console.log(response.data); //obtengo los parametros de la data 
      });
  
  };
   //para poder navegar a la pagina agregar y abajo lo llamamos en el
 const irAPaginaAgregar = () => {
    navigate('/Agregar');
  };

 
  




  return (
    <>
      <h1>Api Maty</h1>
      <button onClick={llamarApi}>Obtener Canciones</button>
      <button onClick={irAPaginaAgregar}>Agregar Nueva Cancion</button>
      <div className="grid-container">
        
        {user.map((user) => { // por cada elemento en el json
          return (
            <div className="card" key={user.id}>
              <h2>{user.Titulo}</h2>
              <img src={user.Caratula} alt={user.Titulo} />
              <p>Duración: {user.Duracion} minutos</p>
              <p>Reproducciones: {user.reproduccion}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}


export default Home