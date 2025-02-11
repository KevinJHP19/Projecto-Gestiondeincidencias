
//Instalamos el react-router-dom e importamos
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
//Importamos las vistas de la carpeta Pages
import Panel from './pages/Panel'
import Login from './pages/Iniciosession'
import Registro from './pages/Registro'

import './App.css'

function App() {
  
  
    return (
      
      <Router>
        
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
  
  <Routes>
      <Route path="/" element={<Panel />} />
      <Route path="/iniciarsesion" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  </Router>
      
    )
    

}

export default App
