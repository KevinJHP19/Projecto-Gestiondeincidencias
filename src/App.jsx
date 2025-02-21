
//Instalamos el react-router-dom e importamos
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Importamos las vistas de la carpeta Pages
import Panel from './pages/Panel'
import Login from './pages/InicioSession'
import Registro from './pages/Registro'

import './App.css'
import Header from './components/Header'
//importamos el ls.jsx


function App() {
  const datos_tickets =[
    {
        id: 1,
        codigo: 123459,
        fecha: "18/04/2023",
        aula: "T6",
        grupo: "DAW1",
        ordenador: "PC3",
        descripcion: "Error de impresora",
        alumno: "Ana Martínez",
        resuelto:true
    },
    {
        id: 2,
        codigo: 123460,
        fecha: "19/04/2023",
        aula: "T8",
        grupo: "DAW2",
        ordenador: "PC4",
        descripcion: "Problema de acceso a archivos",
        alumno: "Pedro Gómez",
        resuelto:false
    }
    

]
  const datos_usuario = [
    {
        id: 1,
        usuario: "Juan",
        email: "Juan@gmail.com",
        password: "1234"
    },
    {
        id: 2,
        usuario: "Pedro",
        email: "Pedro@gmail.com",
        password: "5678"
    }

  ]
    localStorage.setItem('datos_tickets', JSON.stringify([datos_tickets]))
    localStorage.setItem('datos_usuario', JSON.stringify([datos_usuario]))
  
  

  
  
  
  
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
