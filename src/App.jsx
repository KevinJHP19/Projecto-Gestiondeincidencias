
//Instalamos el react-router-dom e importamos
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Importamos las vistas de la carpeta Pages
import Panel from './pages/Panel'
import Login from './pages/InicioSession'
import Registro from './pages/Registro'

import './App.css'
import Header from './components/Header'

function App() {
  

    return (
      
      <Router>
        
    <Header />
  
  <Routes>
      <Route path="/" element={<Panel />} />
      <Route path="/iniciarsesion" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  </Router>
      
    )
    

}

export default App
