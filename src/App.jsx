//componente funcional
//no puedo devolver mas de una etiqueta html
//npm install , instala dependencias de un proyecto de node

//en react los prop son las propiedades que le inyecto a un componente para que este pueda ser mas dinamico

import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios"; //importamos axios para poder hacer las peticiones a la api
import "bootstrap/dist/css/bootstrap.min.css"; //importamos bootstrap para poder usar sus estilos
function App() {
  const [user, setUsers] = useState([]);
  //por ejemplo aqui se utiliza solo una etiqueta div
  //renderizar algo en lista con map (de esta forma)
  function llamarApi() {
    axios
      .get("https://66e44d51d2405277ed13d77a.mockapi.io/usuarios")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      });
    //quiero que se muestren los 5 usuarios de la api con la foto
  }

  function Agregar() {
    var ruta = "https://66e44d51d2405277ed13d77a.mockapi.io/usuarios";
    var userObject = {
      createdAT: Date(),
      name: "MatyPlop(Agregar)",
      avatar: "https://cdn.marvel.com/content/1x/005smp_ons_cut_dsk_01_5.jpg",
    };

    axios.post(ruta, userObject).then((response) => {
      console.log(response.data);
    });
  }
  return (
    <>
      <h1> Api Maty </h1>
      <div className="cardContainer">
        <button onClick={llamarApi}>Click</button>
        <button onClick={Agregar}>Agregar Usuario</button>
        <button onClick={""}>Eliminar</button>
        <button onClick={""}>Editar</button>
        {user.map((user) => {
          return (
            <div className="cardContainer">
              <div className="card">
                <img src={user.avatar} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iusto, error unde! Nam vero suscipit delectus!.
                  </p>
                  <a href="#">
                    <button>prueba</button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
