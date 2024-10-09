
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom'; 

function Home() {
 
  const navigate = useNavigate(); 
 

  /*
  const VerPlaylist = () => {
    navigate('/Playlist');
  }
    */

  const IrCanciones = () => {
    navigate('/Canciones');
  }

 
  



  //decorar la pagina Home
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