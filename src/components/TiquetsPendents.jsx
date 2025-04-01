
import { ticketspendiente, datosticketsJSON } from "./Localstorage";
import { Link } from "react-router-dom";

import {  useState, useEffect } from "react";
import  Comentaris from "./Comentaris";

export default function TiquetsPendents(){
    
    console.log('TiquetsPendents cargados');
    const [tickets, setTickets] = useState(ticketspendiente);
    useEffect(() => {
        const ticketsGuardados = JSON.parse(localStorage.getItem("datos_tickets")) || datosticketsJSON;
        setTickets(ticketsGuardados);
    }, []);
    
    function eliminar(id) {    
        console.log('Id del ticket eliminado:', id);
        //filtramos el ticket a eliminar con el array de ticketspendiente.
        const ticketeliminar = ticketspendiente.filter(ticket => ticket.id === id);
        //ELIMIina el ticket eliminado al array del local storage datos_tickets
        datosticketsJSON.splice(datosticketsJSON.indexOf(ticketeliminar[0]), 1);
        //Actualiza el array del local storage datos_tickets
        localStorage.setItem('datos_tickets', JSON.stringify(datosticketsJSON));
        //Actualiza el array del useState tickets
        ticketspendiente.splice(ticketspendiente.indexOf(ticketeliminar[0]), 1);
        alert('Haz eliminado un ticket del local storage');
        setTickets([...ticketspendiente]);   
    }
    function resolver(id){

        console.log('Id del ticket resuelto:', id);

        const nuevosTickets = tickets.map((ticket) => {
            if (ticket.id === id) {
                return {
                    ...ticket,
                    resuelto: true,
                    fecha_resuelto: new Date().toLocaleDateString() // Añadir la fecha de resolución
                };
            }
            return ticket;
        });

        // Actualizar el estado de React
        setTickets(nuevosTickets);

        // Actualizar el array en localStorage
        localStorage.setItem('datos_tickets', JSON.stringify(nuevosTickets));

        alert('Haz resuelto un ticket del local storage');
        // Recargar la página para mostrar los cambios
        window.location.reload();
    } 
    return (
        <div>
            <h2>Tickets pendientes</h2>
            <button className="btn btn-primary ms-2">
            <Link className='nav-link' to="/tiquet">Crear ticket</Link>
          </button>
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
                            <td><button className="btn btn-success" onClick={() => resolver(ticket.id)}>{ticket.resuelto? 'Resuelto' : 'Pendiente'}</button></td>
                            <td><button className="btn btn-warning" title="Añadir comentario">
                                <Link className="nav-link" to={`/comentari/${ticket.id}`}><i className="bi  bi-pencil" ></i></Link>
                            </button></td>

                            <td><button className="btn btn-info" title="Ver comentarios"><Link className="nav-link" to={`/comentaris/${ticket.id}`} element={<Comentaris/>}><i className="bi bi-chat-left-text"></i></Link>
                            </button>
                            
                            </td>

                            <td><button className="btn btn-danger" title="Eliminar ticket" onClick={() => eliminar(ticket.id)}><i className="bi bi-trash3"></i>
                            </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            
                
        
        
      
    )
}