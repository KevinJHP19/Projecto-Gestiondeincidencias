import { ticketspendiente } from "./Localstorage";
export default function TiquetsPendents(){

    console.log('TiquetsPendents cargados');
    return (
        <div>
            <h2>Tickets pendientes</h2>
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
                    {ticketspendiente.map(ticket => (
                        <tr key={ticket.id}>
                            <td>{ticket.codigo}</td>
                            <td>{ticket.fecha}</td>
                            <td>{ticket.aula}</td>
                            <td>{ticket.grupo}</td>
                            <td>{ticket.ordenador}</td>
                            <td>{ticket.descripcion}</td>
                            <td>{ticket.alumno}</td>
                            <td>{ticket.resuelto? 'Resuelto' : 'Pendiente'}</td>
                            <td><button className="btn btn-warning" title="Añadir comentario"><i className="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                            </button></td>
                            <td><button className="btn btn-info" title="Ver comentarios"><i className="bi bi-chat-left-text"></i>
                            </button></td>
                            <td><button className="btn btn-danger" title="Eliminar ticket"><i className="bi bi-trash3"></i>
                            
                            </button></td>

                            
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}