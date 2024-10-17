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



//HashRouter: Este componente envuelve las rutas para que funcione con github pages , ya que no soportaba rutas directas.
// Usa # en la URl para evitar el problema.
function App() {
 return (
  
  <HashRouter>
 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Agregar" element={<Agregar />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Editar/:id" element={<Editar />} /> //id es un parametro dinamico ,accedemos a ella mediante el hook useParams 
      <Route path="/Canciones" element={<Canciones/>} />
    </Routes>
  
  
  </HashRouter>


  
  );
}

export default App;
