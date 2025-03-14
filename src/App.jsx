
//Instalamos el react-router-dom e importamos
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Importamos las vistas de la carpeta Pages
import Panel from './pages/Panel'
import Login from './pages/InicioSession'
import Registro from './pages/Registro'

import './App.css'
import Header from './components/Header'
import UserContext from './components/UserContext'

import { useState } from'react';

function App() {
  const [user, setUser] = useState(null);

    return (
      <UserContext.Provider value={{ user, setUser }}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Panel />} />
                    <Route path="/iniciarsesion" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                </Routes>
            </Router>
        </UserContext.Provider>
    )
    

}

export default App
