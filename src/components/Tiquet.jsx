export default function Tiquet(){

 return(
    <div className="container">

    
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
 )
}