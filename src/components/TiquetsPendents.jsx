import { ticketspendiente, datosticketsJSON } from "./Localstorage";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Comentaris from "./Comentaris";

export default function TiquetsPendents() {
    console.log('TiquetsPendents cargados');
    
    const [tickets, setTickets] = useState(ticketspendiente);
    const [rol, setRol] = useState(""); // Estado para el rol del usuario
    const [usuario, setUsuario] = useState(""); // Estado para el usuario actual

    useEffect(() => {
        // Obtener los tickets guardados
        const ticketsGuardados = JSON.parse(localStorage.getItem("datos_tickets")) || datosticketsJSON;
        setTickets(ticketsGuardados);

        // Obtener el usuario actual desde el localStorage
        const usuarioActual = JSON.parse(localStorage.getItem('user')); // Parsear el objeto user
        if (usuarioActual) {
            setUsuario(usuarioActual.usuario); // Asignar el nombre del usuario
            setRol(usuarioActual.rol); // Asignar el rol del usuario
        }

        console.log(`Usuario: ${usuarioActual?.usuario}, Rol: ${usuarioActual?.rol}`);
    }, []);

    function eliminar(id) {
        if (rol !== "Administrador") {
            alert("No tienes permisos para eliminar tickets.");
            return;
        }
        console.log('Id del ticket eliminado:', id);
        const ticketeliminar = ticketspendiente.filter(ticket => ticket.id === id);
        datosticketsJSON.splice(datosticketsJSON.indexOf(ticketeliminar[0]), 1);
        localStorage.setItem('datos_tickets', JSON.stringify(datosticketsJSON));
        ticketspendiente.splice(ticketspendiente.indexOf(ticketeliminar[0]), 1);
        alert('Haz eliminado un ticket del local storage');
        setTickets([...ticketspendiente]);
    }

    function resolver(id) {
        if (rol !== "Administrador") {
            alert("No tienes permisos para resolver tickets.");
            return;
        }
        console.log('Id del ticket resuelto:', id);
        const nuevosTickets = tickets.map((ticket) => {
            if (ticket.id === id) {
                return {
                    ...ticket,
                    resuelto: true,
                    fecha_resuelto: new Date().toLocaleDateString()
                };
            }
            return ticket;
        });
        setTickets(nuevosTickets);
        localStorage.setItem('datos_tickets', JSON.stringify(nuevosTickets));
        alert('Haz resuelto un ticket del local storage');
        window.location.reload();
    }
    console.log('prueba', usuario)
    // Filtrar tickets según el rol
    const ticketsFiltrados = rol === "Usuario"
    ? tickets.filter(ticket => ticket.alumno === usuario) // Solo los tickets del usuario actual
    : tickets;

    return (
        <div>
            <h2>Tickets pendientes</h2>
            {ticketsFiltrados.length === 0 ? (
                <p>No tienes tickets pendientes disponibles.</p> // Mensaje cuando no hay tickets
            ) : (
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Fecha</th>
                            <th>Aula</th>
                            <th>Grupo</th>
                            <th>Ordenador</th>
                            <th>Descripción</th>
                            <th>Alumno</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ticketsFiltrados.map(ticket => (
                            <tr key={ticket.id}>
                                <td>{ticket.codigo}</td>
                                <td>{ticket.fecha}</td>
                                <td>{ticket.aula}</td>
                                <td>{ticket.grupo}</td>
                                <td>{ticket.ordenador}</td>
                                <td>{ticket.descripcion}</td>
                                <td>{ticket.alumno}</td>
                                <td>
                                    {rol === "Administrador" && (
                                        <button className="btn btn-success" onClick={() => resolver(ticket.id)}>
                                            {ticket.resuelto ? 'Resuelto' : 'Pendiente'}
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {(rol === "Profesor" || rol === "Administrador") && (
                                        <button className="btn btn-warning" title="Añadir comentario">
                                            <Link className="nav-link" to={`/comentari/${ticket.id}`}>
                                                <i className="bi bi-pencil"></i>
                                            </Link>
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {(rol === "Profesor" || rol === "Administrador") && (
                                        <button className="btn btn-info" title="Ver comentarios">
                                            <Link className="nav-link" to={`/comentaris/${ticket.id}`} element={<Comentaris />}>
                                                <i className="bi bi-chat-left-text"></i>
                                            </Link>
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {rol === "Administrador" && (
                                        <button className="btn btn-danger" title="Eliminar ticket" onClick={() => eliminar(ticket.id)}>
                                            <i className="bi bi-trash3"></i>
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}