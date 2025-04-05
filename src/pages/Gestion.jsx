import { useState } from "react";
import { datosusuarioJSON } from "../components/Localstorage";

export default function Gestion() {
    if(localStorage.getItem("user") == null){
        window.location.href = "/iniciarsesion";
    }
    const [usuarios, setUsuarios] = useState(() => {
        // Cargar datos desde localStorage o usar datos iniciales
        const datosGuardados = localStorage.getItem("datos_usuario");
        return datosGuardados ? JSON.parse(datosGuardados) : datosusuarioJSON;
    });
    // Función para actualizar el rol de un usuario
    const actualizarRol = (id, nuevoRol) => {
        const usuariosActualizados = usuarios.map((usuario) =>
            usuario.id === id ? { ...usuario, rol: nuevoRol } : usuario
        );
        setUsuarios(usuariosActualizados);

        // Actualizar el localStorage
        localStorage.setItem("datos_usuario", JSON.stringify(usuariosActualizados));
        alert(`El rol  se ha actualizado a ${nuevoRol}`);
    };
    
    

    

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
                                    <option value="profesor">Profesor</option>
                                    
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}