import { useState } from "react";

export default function Tiquet() {
    // Estado para gestionar los valores del formulario
    const [formdatos, setFormdatos] = useState({
        codigo: "",
        fecha: "",
        aula: "",
        grupo: "",
        ordenador: "",
        descripcion: "",
        alumno: ""
    });

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormdatos({
            ...formdatos,
            [id]: value
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", formdatos);
        
    }
    

    

    return (
        <div className="container mt-5 mb-5 d-flex justify-content-center " >
            <form onSubmit={handleSubmit} style={{ width: "50%" }}>
                <h4>Crear ticket</h4>
                <label htmlFor="codigo" className="form-label">Introduce el código</label>
                <input
                    type="text"
                    className="form-control"
                    id="codigo"
                    value={formdatos.codigo}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="fecha" className="form-label">Introduce la fecha</label>
                <input
                    type="text"
                    className="form-control"
                    id="fecha"
                    value={formdatos.fecha}
                    onChange={handleChange}
                    placeholder="dd/mm/aaaa"
                    required
                />
                <label htmlFor="aula" className="form-label">Introduce el aula</label>
                <input
                    type="text"
                    className="form-control"
                    id="aula"
                    value={formdatos.aula}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="grupo" className="form-label">Introduce el grupo</label>
                <input
                    type="text"
                    className="form-control"
                    id="grupo"
                    value={formdatos.grupo}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="ordenador" className="form-label">Introduce el ordenador</label>
                <input
                    type="text"
                    className="form-control"
                    id="ordenador"
                    value={formdatos.ordenador}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="descripcion" className="form-label">Introduce la descripción</label>
                <textarea
                    className="form-control"
                    id="descripcion"
                    rows="3"
                    value={formdatos.descripcion}
                    onChange={handleChange}
                    required
                ></textarea>
                <label htmlFor="alumno" className="form-label">Introduce el alumno</label>
                <input
                    type="text"
                    className="form-control"
                    id="alumno"
                    value={formdatos.alumno}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="btn btn-primary mt-3">Crear Ticket</button>
            </form>
        </div>
    );
}