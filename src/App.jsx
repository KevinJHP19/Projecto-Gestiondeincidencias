
//Instalamos el react-router-dom e importamos
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Importamos las vistas de la carpeta Pages
import Panel from './pages/Panel'
import Login from './pages/Iniciosession'
import Registro from './pages/Registro'

import './App.css'
import Header from './components/Header'

function App() {
<<<<<<< Updated upstream
=======
  const datos_tickets =[
    {
      id:1,
      codigo: 123457,
      fecha: "15/04/2023",
      fecha_resuelto:"15/05/2023",
      aula: "T7",
      grupo: "DAW2",
      ordenador: "PC1",
      descripcion: "Problema de conexión a Internet",
      alumno: "Juan Pérez",
      resuelto:true

    },
    {
      id:2,
      codigo:123458,
      fecha: "17/04/2023",
      fecha_resuelto:"15/05/2023",
      aula: "T8",
      grupo: "DAW1",
      ordenador: "PC2",
      descripcion: "Pantalla en blanco",
      alumno: "Juan Rodríguez",
      resuelto:true

    },
    {
      id:3,
      codigo: 123459,
      fecha: "18/04/2023",
      fecha_resuelto:"15/05/2023",
      aula: "T8",
      grupo: "DAW1",
      ordenador: "PC3",
      descripcion: "Error de impresora",
      alumno: "Ana Martínez",
      resuelto:true
    },
    {
        id: 4,
        codigo: 123459,
        fecha: "18/04/2023",
        aula: "T6",
        grupo: "DAW1",
        ordenador: "PC3",
        descripcion: "Error de impresora",
        alumno: "Ana Martínez",
        resuelto:false
    },
    {
        id: 5,
        codigo: 123460,
        fecha: "19/04/2023",
        aula: "T8",
        grupo: "DAW2",
        ordenador: "PC4",
        descripcion: "Problema de acceso a archivos",
        alumno: "Pedro Gómez",
        resuelto:false
    },
    {
        id: 6,
        codigo: 123461,
        fecha: "20/04/2023",
        aula: "T6",
        grupo: "DAW1",
        ordenador: "PC1",
        descripcion: "Aplicación se cierra inesperadamente",
        alumno: "Sofía Fernández",
        resuelto:false
    },
    {
      id:7,
      codigo: 123462,
      fecha: "21/04/2023",
      aula: "T7",
      grupo: "DAW2",
      ordenador: "PC2",
      descripcion: "Problema de conexión a la red",
      alumno: "Luis Torres",
      resuelto: false
    },
    {
      id:8,
      codigo: 123463,
      fecha: "22/04/2023",
      aula: "T8",
      grupo: "DAW1",
      ordenador: "PC3",
      descripcion: "Archivos corruptos",
      alumno: "Carolina Ramírez",
      resuelto: false
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

    const datosticketsJSON = JSON.parse(localStorage.getItem([datos_tickets]));

    const ticketspendiente = datosticketsJSON.filter(ticket => ticket.resuelto === false)

    console.log(ticketspendiente);
  
  

  
  
>>>>>>> Stashed changes
  
  
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
