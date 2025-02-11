
import { Link } from 'react-router-dom';

export default function Header(){

    return (
        <>
        <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link class="navbar-brand" to='/'>Gestión de incidencias FPLLEFIA</Link>
        
        <div>
            <Link className="btn btn-secondary ms-2" to="/">PANEL</Link>
            <Link className="btn btn-secondary ms-2" to="/iniciarsesion">LOGIN</Link>
            <Link className="btn btn-secondary ms-2" to="/registro">REGISTRO</Link>
        </div>
        <div>
          <span>administrador@fpllefia.com</span>
          
        </div>
      </div>
    </nav>
        </>
    );
}