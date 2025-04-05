import { ticketsresueltos, datosticketsJSON } from "./Localstorage";
import { Link } from "react-router-dom";
import Comentaris from "./Comentaris";
import { useState, useEffect } from "react";

export default function Tiquetsresolts() {
    console.log('TiquetsResueltos cargados');

    const [rol, setRol] = useState(""); // Estado para el rol del usuario
    const [usuario, setUsuario] = useState(""); // Estado para el usuario actual

    useEffect(() => {
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
        const ticketeliminar = ticketsresueltos.filter(ticket => ticket.id === id);

        // Elimina el ticket del array del localStorage
        datosticketsJSON.splice(datosticketsJSON.indexOf(ticketeliminar[0]), 1);

        // Actualiza el array en el localStorage
        localStorage.setItem('datos_tickets', JSON.stringify(datosticketsJSON));
        console.log(datosticketsJSON);

        // Recarga la página para mostrar los cambios
        window.location.reload();
    }

    // Filtrar tickets según el rol
    const ticketsFiltrados = rol === "Usuario"
        ? ticketsresueltos.filter(ticket => ticket.alumno === usuario) // Solo los tickets del usuario actual
        : ticketsresueltos; // Todos los tickets para roles "Profesor" y "Administrador"

        return (
            <div>
                <h2>Tickets resueltos</h2>
                {ticketsFiltrados.length === 0 ? (
                    <p>No tienes tickets resueltos disponibles.</p> // Mensaje cuando no hay tickets
                ) : (
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Fecha</th>
                                <th>Fecha resuelto</th>
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
                            {ticketsFiltrados.map((tiquet, index) => (
                                <tr id={index} key={index}>
                                    <td>{tiquet.codigo}</td>
                                    <td>{tiquet.fecha}</td>
                                    <td>{tiquet.fecha_resuelto}</td>
                                    <td>{tiquet.aula}</td>
                                    <td>{tiquet.grupo}</td>
                                    <td>{tiquet.ordenador}</td>
                                    <td>{tiquet.descripcion}</td>
                                    <td>{tiquet.alumno}</td>
                                    <td>
                                        {(rol === "Profesor" || rol === "Administrador") && (
                                            <button className="btn btn-info" title="Ver comentarios">
                                                <Link className="nav-link" to={`/comentaris/${tiquet.id}`} element={<Comentaris />}>
                                                    <i className="bi bi-chat-left-text"></i>
                                                </Link>
                                            </button>
                                        )}
                                    </td>
                                    <td>
                                        {rol === "Administrador" && (
                                            <button className="btn btn-danger" title="Eliminar ticket" onClick={() => eliminar(tiquet.id)}>
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