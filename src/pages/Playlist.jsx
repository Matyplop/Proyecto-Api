/*import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Playlist = () => {
  const [Playlist, setPlaylist] = useState([]);
  const navigate = useNavigate();

  const VolverHome = () => {
    navigate('/Home');
  };

  const llamarApi = () => {
    axios
      .get("https://66e44d51d2405277ed13d77a.mockapi.io/Playlist")
      .then((response) => {
        setPlaylist(response.data);  
        console.log(response.data); //obtengo los parametros de la data 
      })
      .catch((error) => {
        console.error('Error al llamar a la API:', error);
      });
  };

  useEffect(() => {
    llamarApi(); // Llamar a la API cuando el componente se monte
  }, []);

  const eliminarPlaylist = (id) => {
    axios
      .delete(`https://66e44d51d2405277ed13d77a.mockapi.io/Playlist/${id}`)
      .then(() => {
        setPlaylist(Playlist.filter(playlist => playlist.id !== id));
      })
      .catch((error) => {
        console.error('Error al eliminar la playlist:', error);
      });
  };

  return (
    <>
      <div>
        <h1>Playlist</h1>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {Playlist.map((playlist, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{playlist.Titulo}</td>
                  <td>{playlist.Autor}</td>
                  <td>
                    <FontAwesomeIcon 
                      icon={faTrash} 
                      onClick={() => eliminarPlaylist(playlist.id)} 
                      style={{ cursor: 'pointer', color: 'red' }} 
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <button onClick={VolverHome}>Volver a Home</button>
      </div>
    </>
  );
};

export default Playlist;
*/