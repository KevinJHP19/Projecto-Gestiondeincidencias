import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from './UserContext.jsx';

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('user');
    if (usuarioGuardado) {
      setUser(JSON.parse(usuarioGuardado)); // Convertir el string de localStorage a objeto
    }
  }, [setUser]);

  const cerrarSesion = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Gestión de incidencias FPLLEFIA
          </Link>

          <div>
            <Link className="btn btn-secondary ms-2" to="/">
              PANEL
            </Link>

            <Link className="btn btn-secondary ms-2" to="/iniciarsesion">
              LOGIN
            </Link>

            <Link className="btn btn-secondary ms-2" to="/registro">
              REGISTRO
            </Link>

            {/* Mostrar el enlace ADMIN solo si el usuario tiene rol "Administrador" */}
            {user && user.rol === "Administrador" && (
              <Link className="btn btn-secondary ms-2" to="/gestion">
                ADMIN
              </Link>
            )}
          </div>

          <div>
            <span>
              {user
                ? `Usuario: ${user.usuario} | Email: ${user.email} | Rol: ${user.rol}`
                : "administrador@fpllefia.com"}
            </span>

            {user && (
              <button className="btn btn-danger ms-2" onClick={cerrarSesion}>
                Cerrar Sesión
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}