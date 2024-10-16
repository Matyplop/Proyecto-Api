//componente funcional
//no puedo devolver mas de una etiqueta html
//npm install , instala dependencias de un proyecto de node

//en react los prop son las propiedades que le inyecto a un componente para que este pueda ser mas dinamico
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Agregar from "./pages/Agregar";
import Canciones from "./pages/Canciones";
import Editar from "./pages/Editar";
import "./App.css";
import { HashRouter } from "react-router-dom";




function App() {
 return (
  
  <HashRouter>
 
    <Routes>
      <Route path="/Proyecto-Api" element={<Home />} />
      <Route path="/Proyecto-Api/Agregar" element={<Agregar />} />
      <Route path="/Proyecto-Api/Home" element={<Home />} />
      <Route path="/Proyecto-Api/Editar/:id" element={<Editar />} /> //aqui podemos ver que se le pasa un parametro id
      <Route path="/Proyecto-Api/Canciones" element={<Canciones/>} />
    </Routes>
  
  
  </HashRouter>


  
  );
}

export default App;
