
import { ticketspendiente } from "./Localstorage";

import { useState } from "react";
export default function TiquetsPendents(){

    console.log('TiquetsPendents cargados');
    const [tickets, setTickets] = useState(ticketspendiente);

    function agregarticket(){
        const id = ticketspendiente.length + 1;
        const codigo = parseInt(document.querySelector('#codigo').value);
        const fecha = document.querySelector('#fecha').value;
        const aula = document.querySelector('#aula').value;
        const grupo = document.querySelector('#grupo').value;
        const ordenador = document.querySelector('#ordenador').value;
        const descripcion = document.querySelector('#descripcion').value;
        const alumno = document.querySelector('#alumno').value;

        
        console.log('ticket agregado');
        ticketspendiente.push({id, codigo, fecha, aula, grupo, ordenador, descripcion, alumno, resuelto: false});


        setTickets([...ticketspendiente]);
        console.log(ticketspendiente);
        document.querySelector('#codigo').value = '';
        document.querySelector('#fecha').value = '';
        document.querySelector('#aula').value = '';
        document.querySelector('#grupo').value = '';
        document.querySelector('#ordenador').value = '';
        document.querySelector('#descripcion').value = '';
        document.querySelector('#alumno').value = '';

    }
    return (
        <div>
            <h2>Tickets pendientes</h2>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Crear ticket
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
                            <td><button className="btn btn-success">{ticket.resuelto? 'Resuelto' : 'Pendiente'}</button></td>
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
            
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <h4>Crear ticket</h4>
                            <label htmlFor="" className="form-label">Introduce el código</label>
                            <input type="text" className="form-control" id="codigo" aria-describedby="" required/>  
                            <label htmlFor="" className="form-label">Introduce la fecha</label>
                            <input type="text" className="form-control" id="fecha" aria-describedby="" placeholder="dd/mm/aaaa" required/>
                            <label htmlFor="" className="form-label">Introduce el aula</label>
                            <input type="text" className="form-control" id="aula" aria-describedby="" required/>
                            <label htmlFor="" className="form-label">Introduce el grupo</label>
                            <input type="text" className="form-control" id="grupo" aria-describedby="" required />
                            <label htmlFor="" className="form-label">Introduce el ordenador</label>
                            <input type="text" className="form-control" id="ordenador" aria-describedby="" required/>
                            <label htmlFor="" className="form-label">Introduce la descripción</label>
                            <textarea className="form-control" id="descripcion" rows="3" required></textarea>
                            <label htmlFor="" className="form-label">Introduce el alumno</label>
                            <input type="text" className="form-control" id="alumno" aria-describedby="" required/>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={agregarticket}>Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        
        
      
    )
}