import { useParams } from "react-router-dom";
import { datosticketsJSON } from "./Localstorage";
import { datoscomentariosJSON } from "./Localstorage";


export default function Comentaris(){

  console.log("comentarios cargados");
  
  const { id } = useParams();
  const ticket = datosticketsJSON.find((t) => t.id === parseInt(id));
  console.log(ticket);
  console.log(datoscomentariosJSON);
  const comentarios = datoscomentariosJSON.filter((c) => c.ticket_id === parseInt(id));

  console.log(comentarios);
  

    return (
        <>
        <main className="container mt-5">
        <div className="d-flex">
          <h1>Comentarios</h1><button className="btn btn-link ms-auto"> Volver</button>
        </div>
        
        <h2 className="my-4">Código ticket: <span>{ticket.codigo}</span></h2>
        
        <div className="">
          
        
          <div className="mt-4">
            {
              comentarios.map((c) => (
                <div key={c.id} className="card p-3 mt-2">
                  <h5 className="text-end">Autor: 
                    <span>{c.usuario}</span>
                    <span className="ms-4">{c.fecha}</span>
                  </h5>
                  <p>{c.comentario}</p>
                </div>
              ))
            }
             
          </div>
        </div>
        
      </main>
      
    
    
    
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Observaciones</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Código incidencia: <span>123546</span></p>
            <label htmlFor="comentario" className="form-label">Comentario:</label> 
            <input className="form-control" value="Estee es un comentario sobre esta incidencia" readOnly />
            <p className="small text-end">Autor: <span>Pepe Loco</span></p>
          </div>
          <div className="modal-footer">
    
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary">Guardar cambios</button>
          </div>
        </div>
      </div>
    </div>
    </>
    
    )
}