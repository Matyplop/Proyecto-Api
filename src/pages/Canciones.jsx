import  { useState, useEffect } from "react";
import axios from "axios"; //peticiones HTTP
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


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
      .get("https://favourite-odessa-matyplop-fb1c7371.koyeb.app/api/songs")
      .then((response) => {
        setCanciones(response.data.song); //aqui recibo los datos de la api para actualizar el estado  
        console.log(response.data.song); 
        
        
      });
      
    };
  
    useEffect(() => {
    llamarApi(); // Llamar a la API cuando el componente se este puesto
  }, []);


  function EliminarCancion(id) {
  axios.delete(`https://favourite-odessa-matyplop-fb1c7371.koyeb.app/api/songs/${id}`)
  //obtiene la respuesta con then(response)
    .then((response) => {
      setCanciones(Canciones.filter(Canciones => Canciones.id !== id));

      //filtra  para poder eliminar solo lo que se selecciona mediante id 
      //y los que sobran , no se eliman , 
      //por enede si canciones.id es distinto de id no se elimina.
      //ademas con setCanciones se actualiza el estado


      
      console.log(response.data.song);
    });
  }

  //botones se utiliza una función que al hacer click 
  //se llamará a la función EliminarCancion y se le pasará el id de la canción. para eliminarla
  //map : itera por cada elemento de la array Canciones
  //key : para que se identifique como unico
  //cada ves que apreta el boton eliminar se llama a la funcion EliminarCancion y se le pasa el id de la cancion lo mismo con EditarCancion


  return (

    <>
    
      <h1>Top Canciones</h1>
      <button className="button-spacing" onClick={VolverHome}>Volver a Home</button>
      <button onClick={irAPaginaAgregar}>Agregar Nueva Cancion</button>

      
      
      

      <div className="grid-container">
        
        {Canciones.map((cancion) => (
            <div className="card" key={cancion.id}>
              <h2>{cancion.titulo}</h2>
              <img 
                src={cancion.caratula} 
                alt={`Carátula de ${cancion.titulo}`} 
              />
              <p>Autor: {cancion.autor}</p>
              <p>Género: {cancion.genero}</p>
              <button onClick={() => EditarCancion(cancion.id)}>Editar <EditIcon /></button>
              <button onClick={() => EliminarCancion(cancion.id)}>Eliminar <DeleteIcon /></button>
            </div>
          )
           
          )
        };
      </div>
           
      
    
    
    </>
    
    
  );
};


export default Canciones;