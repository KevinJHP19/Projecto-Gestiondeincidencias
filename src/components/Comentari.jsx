import { useParams } from "react-router-dom";
import { datosticketsJSON, datoscomentariosJSON } from "./Localstorage";
import { useContext, useState } from 'react';
import UserContext from './UserContext.jsx';

export default function Comentari({ agregarComentario }) {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [comentario, setComentario] = useState('');
  const [fecha, setFecha] = useState('');

  const ticket = datosticketsJSON.find((t) => t.id === parseInt(id));

  function agregarcomentario(event) {
    event.preventDefault();
    const idcomentario = datoscomentariosJSON.length + 1;
    const nuevoComentario = {
      id: idcomentario,
      ticket_id: parseInt(id),
      usuario: user.usuario,
      fecha,
      comentario
    };
    datoscomentariosJSON.push(nuevoComentario);
    localStorage.setItem('datos_comentarios', JSON.stringify(datoscomentariosJSON));

    // Limpiar el formulario
    setComentario('');
    setFecha('');
    alert('Tu comentario ha sido agregado');

    // Llamar a la función pasada como prop para actualizar los comentarios
    agregarComentario(nuevoComentario);
  }

  return (
    <div className="container">
      <h1 className="text-center p-3">Crear comentario</h1>
      <div className="d-flex align-items-center">
        <h3>Ticket: {ticket.codigo}</h3>
      </div>
      <form className="form card p-3 shadow" onSubmit={agregarcomentario}>
        <label htmlFor="comentario" className="form-label">Comentario: </label>
        <textarea
          className="form-control"
          cols="3"
          id="comentario"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          required
        ></textarea>
        <label htmlFor="fecha" className="form-label me-2 mt-3">Fecha: </label>
        <div className="d-flex align-items-center">
          <input
            id='fecha'
            type="date"
            className="form-control w-25"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
          <button className="btn btn-success ms-auto">Añadir comentario</button>
        </div>
      </form>
    </div>
  );
}