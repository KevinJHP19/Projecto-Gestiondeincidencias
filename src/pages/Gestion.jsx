import { useState, useEffect } from "react";
import { datosusuarioJSON } from "../components/Localstorage";

export default function Gestion() {
    const [usuarios, setUsuarios] = useState(() => {
        // Cargar datos desde localStorage o usar datos iniciales
        const datosGuardados = localStorage.getItem("datos_usuario");
        return datosGuardados ? JSON.parse(datosGuardados) : datosusuarioJSON;
    });

    

    return (
        <div className="container mt-5">
            <h2>Gestión de Usuarios</h2>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.usuario}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.rol}</td>
                            <td>
                                <select
                                    className="form-select"
                                    value={usuario.rol}
                                    onChange={(e) => actualizarRol(usuario.id, e.target.value)}
                                    aria-label="Seleccionar rol"
                                >
                                    <option value="" disabled>Selecciona un rol</option>
                                    <option value="admin">Administrador</option>
                                    <option value="usuario">Usuario</option>
                                    
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}