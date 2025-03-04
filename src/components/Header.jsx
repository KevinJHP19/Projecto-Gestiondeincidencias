
import { Link } from 'react-router-dom';

export default function Header(){

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
          <span>administrador@fpllefia.com</span>
          
        </div>
      </div>
    </nav>
        </>
    );
}