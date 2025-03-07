
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './UserContext.jsx';
export default function Header(){
  // Usamos el UserContext para obtener el estado del usuario
  

      const { user } = useContext(UserContext);
      console.log('Este es el user context' + user)

    return (
        <>
        <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link class="navbar-brand" to='/'>Gestión de incidencias FPLLEFIA</Link>
        
        <div>
          <button className="btn btn-secondary ms-2">
            <Link className='nav-link' to="/">PANEL</Link>
            </button>
          <button className="btn btn-secondary ms-2">
            <Link className='nav-link' to="/iniciarsesion">LOGIN</Link>
          </button>
          <button className="btn btn-secondary ms-2">
            <Link className='nav-link' to="/registro">REGISTRO</Link>
          </button>
        </div>
        <div>
          <span>{ user ? "Usuario: " + user.usuario +"  " +"  Email: " + user.email : 'administrador@fpllefia.com'}</span>
          
          
        </div>
      </div>
    </nav>
        </>
    );
}