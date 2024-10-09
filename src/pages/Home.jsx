import React, { useState, useEffect } from "react";  //uno es de efecto y el otro es de estado (son hub)
 //importamos axios para poder hacer las peticiones a la api
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom'; //esto es para poder navegar entre paginas cuando se haga click en algun boton

const Home = () => {
  const [user, setUsers] = useState([]);
  const navigate = useNavigate(); 
  //por ejemplo aqui se utiliza solo una etiqueta div
  //renderizar algo en lista con map (de esta forma)
  
  
   //para poder navegar a la pagina agregar y abajo lo llamamos en el
 
  /*
  const VerPlaylist = () => {
    navigate('/Playlist');
  }
    */

  const IrCanciones = () => {
    navigate('/Canciones');
  }

 
  




  return (
    <>
      <h1>Api Maty</h1>
      <div>
      
      <button onClick={IrCanciones}>Explorar Canciones</button>

      </div>
      
      
      
    </>
  );
}


export default Home