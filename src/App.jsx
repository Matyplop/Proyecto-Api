//componente funcional
//no puedo devolver mas de una etiqueta html
//npm install , instala dependencias de un proyecto de node

//en react los prop son las propiedades que le inyecto a un componente para que este pueda ser mas dinamico
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agregar from "./pages/Agregar";
import Canciones from "./pages/Canciones";
import "./App.css";


function App() {
 return (


  <Router>
    <Routes>
      <Route path="/Proyecto-Api" element={<Home />} />
      <Route path="/Agregar" element={<Agregar />} />
      <Route path="/Home" element={<Home />} />
      
      
     <Route path="/Canciones" element={<Canciones/>} />
    </Routes>
  </Router>
  )
}

export default App;
