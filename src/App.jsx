//componente funcional
//no puedo devolver mas de una etiqueta html
//npm install , instala dependencias de un proyecto de node

//en react los prop son las propiedades que le inyecto a un componente para que este pueda ser mas dinamico
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import Agregar from "./pages/Agregar";

function App() {
 return (

// ver por que no funciona
  <Router>
    <Routes>
      <Route path="/Proyecto-Api" element={<Home />} />
      <Route path="/Agregar" element={<Agregar />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  </Router>
  )
}

export default App;
