import React, { useState, useEffect } from "react";
import axios from "axios"; //peticiones HTTP
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

//useNavigate usa las rutas que estan en el Router en app.jsx para navegar entre paginas
//useState: lo utilizo para almacenar las canciones que obtengo de la API
//useEffect: lo utilizo para llamar a la API cuando el componente se monte , como esta vacio se ejecuta una sola vez
//pero se usa tambien para obtener datos , actualizar el DOM , etc.
//llamarApi() : hace petición a la API usando axios.get
//map() : // itera por cada elemento de la array Canciones y devuelve un div con la info de cada cancion

function Canciones() {
  
  
  const [Canciones, setCanciones] = useState([]); //aqui manejamos el estado de los datos 
   //ademas devolvemos un array vacio para que se almacenen los datos de la API , el cual será las cancuones 
   //y setCanciones para actualizar el estado.
  const navigate = useNavigate();

  const VolverHome = () => {
    navigate('/Home');
  };

  const irAPaginaAgregar = () => {
    navigate('/Agregar');
  };

  const EditarCancion = (id) => { //para tomar el id especifico de la cancion , se pasa como parametro
    navigate(`/editar/${id}`);

  }

  function llamarApi() {
    axios
      .get("https://66e44d51d2405277ed13d77a.mockapi.io/Cancion")
      .then((response) => {
        setCanciones(response.data); //aqui recibo los datos de la api para actualizar el estado  
        console.log(response.data); 
        
        
      });
      
    };
  
    useEffect(() => {
    llamarApi(); // Llamar a la API cuando el componente se este puesto
  }, []);


  function EliminarCancion(id) {
  axios.delete(`https://66e44d51d2405277ed13d77a.mockapi.io/Cancion/${id}`)
  //obtiene la respuesta con then(response)
    .then((response) => {
      setCanciones(Canciones.filter(Canciones => Canciones.id !== id));

      //filtra  para poder eliminar solo lo que se selecciona mediante id 
      //y los que sobran , no se eliman , 
      //por enede si canciones.id es distinto de id no se elimina.
      //ademas con setCanciones se actualiza el estado


      
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
              <img 
                src={Canciones.Caratula} 
                alt={Canciones.Titulo} 
               
                />
              <p>Duración: {Canciones.Duracion} minutos</p>
              <p>Autor: {Canciones.Autor}</p>
              <button onClick={() => EliminarCancion(Canciones.id)}>Eliminar Cancion</button>
              //Aquí se utiliza una función que al hacer click 
              //se llamará a la función EliminarCancion y se le pasará el id de la canción. para eliminarla
              <button onClick={() => EditarCancion(Canciones.id)}><EditIcon /></button>
              
            </div>
           
          );
        })}
      </div>
           
      
    </div>
    
    </>
    
    
  );
};


export default Canciones;