
import axios from "axios";
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';



function Agregar() {
  const {  register, handleSubmit, } = useForm(); 
  //llamamos al hook userForm para utilizar los metodos   de validacion de los campos del formulario
  //register: registra los campos y los valida
  //handlesubmit: para poder enviar los datos del formulario
  

  
  
  
  const navigate = useNavigate();

  

  //aqui resivimos los datos del formulario
  //y los agrega a la API que es agregarCancion
  const onSubmit = (data) => {
    agregarCancion(data);
    console.log(data);
    
  };

  const Volver = () => {
    navigate('/Canciones');
  };

 
  

  //hacemos peticion post a la API para agregar una cancion
  //lo unico diferente es que se necesita como argumento la data que es la que envias a la api

  function agregarCancion(data) {
  axios.post("https://favourite-odessa-matyplop-fb1c7371.koyeb.app/api/songs", data)
    .then((response) => {
      console.log(response);
      navigate("/Canciones");
      
     
     
    });
  }

  
  
  
  
  //handleSubmit:  verifica si los dato son correctos 
  // onsubmit:  cuando el formulario se envia si los datos son correctos 
  //handleSubmit(onSubmit): esto se encarga de validar los datos del formulario
  //register :  registra los campos del formulario y los valida,ademas los 3 puntos son para que se pueda usar todas las propiedades de register
  // utilizando como clave ya sea titulo , duracion , autor o caratula.
  return (
    <>
      <h1>Agregar canción a la API</h1>
      
      
      <form onSubmit={handleSubmit(onSubmit)}> 
        
        
        <Form.Group className="mb-3">
          <Form.Label>Nombre de la canción</Form.Label>
          <Form.Control type="text"  placeholder="Ingresar Canción" {...register('titulo',
            {required :true})}/>
            

          
          
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Autor</Form.Label>
          <Form.Control type="text" name= "autor" placeholder="Ingresar Autor" {...register("autor",
            {required :true})}/>
            
          
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Caratula</Form.Label>
          <Form.Control type="text" name= "caratula" placeholder="Ingresar Link de imagen" {...register("caratula",
            {required :true})}/>
            
          


        </Form.Group>



        <Form.Group className="mb-3">
          <Form.Label>Genero</Form.Label>
          <Form.Control type="text" name= "genero" placeholder="Ingresar Genero" {...register("genero",
            {required :true})}/>
            
          


        </Form.Group>

        

       <button type = "submit" value="enviar"  >Agregar</button>

      </form>
      
      
      
      <button className="button-spacing" onClick={Volver}>Volver</button>
    
    </> 
      
    
  );
};

export default Agregar;