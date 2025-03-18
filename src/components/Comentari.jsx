import { useParams } from "react-router-dom";
import { datosticketsJSON } from "./Localstorage";
export default function Comentari(){
    console.log("formulario crear comentario cargado")
    const { id } = useParams();
    
  const ticket = datosticketsJSON.find((t) => t.id === parseInt(id));
  console.log(ticket);

    return(
        <>
        <div className="container">
            <h1 className="text-center p-3">Crear comentario</h1>
            <h2 className="my-4">Código ticket: <span>{ticket.codigo}</span></h2>
            <form action="" className="form card p-3 shadow">
            <label htmlFor="comentario" className="form-label">Comentario: </label>
            <textarea className="form-control" cols="3"></textarea>
            <label htmlFor="fecha" className="form-label me-2 mt-3">Fecha: </label>
            <div className="d-flex align-items-center">
              <input type="datetime-local" className="form-control w-25" />
              <button className="btn btn-success ms-auto">Añadir comentario</button>
            </div>
          </form>
          </div>
        </>
    )
}