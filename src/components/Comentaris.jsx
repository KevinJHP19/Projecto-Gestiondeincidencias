import { useParams } from "react-router-dom";
import { datosticketsJSON } from "./Localstorage";
import { datoscomentariosJSON } from "./Localstorage";
import Comentari from "./Comentari";
import { useState, useEffect } from "react";

export default function Comentaris() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const foundTicket = datosticketsJSON.find((t) => t.id === parseInt(id));
    setTicket(foundTicket);

    const filteredComentarios = datoscomentariosJSON.filter((c) => c.ticket_id === parseInt(id));
    setComentarios(filteredComentarios);
  }, [id]);

  const agregarComentario = (nuevoComentario) => {
    setComentarios((prevComentarios) => [...prevComentarios, nuevoComentario]);
  };

  if (!ticket) {
    return <p>Ticket no encontrado</p>;
  }

  return (
    <>
      <main className="container mt-5">
        <div className="d-flex">
          <h1>Comentarios</h1>
          <button className="btn btn-link ms-auto">Volver</button>
        </div>

        <h2 className="my-4">
          Código ticket: <span>{ticket.codigo}</span>
        </h2>
        <Comentari agregarComentario={agregarComentario} />
        <div className="mt-4">
          {comentarios.map((c) => (
            <div key={c.id} className="card p-3 mt-2">
              <h5 className="text-end">
                Autor: <span>{c.usuario}</span>
                <span className="ms-4">{c.fecha}</span>
              </h5>
              <p>{c.comentario}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}