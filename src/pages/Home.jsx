
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom'; 

function Home() {
 
  const navigate = useNavigate(); 
 

 

  const IrCanciones = () => {
    navigate('/Proyecto-Api/Canciones');
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