//Instalamos el react-router-dom e importamos
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Importamos las vistas de la carpeta Pages
import Panel from './pages/Panel'
import Login from './pages/InicioSession'
import Registro from './pages/Registro'
import Comentaris from './components/Comentaris' 
import Comentari from './components/Comentari'
import Gestion from './pages/Gestion'

import Tiquet from './components/Tiquet'

import './App.css'
import Header from './components/Header'
import UserContext from './components/UserContext'

import { useState, useEffect } from'react';
// Importamos los datos iniciales desde Localstorage.jsx
import { datosticketsJSON } from './components/Localstorage';

function App() {
    const [user, setUser] = useState(null); // Definimos el estado para el usuario

    // Inicializamos dades_tickets con datos de localStorage o los datos iniciales
    const [dades_tickets, setDades_tickets] = useState(() => {
        const datosGuardados = localStorage.getItem("dades_tickets");
        return datosGuardados ? JSON.parse(datosGuardados) : datosticketsJSON;
    });

    // Sincronizamos dades_tickets con localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem("dades_tickets", JSON.stringify(dades_tickets));
    }, [dades_tickets]);

    // Función GET para obtener datos
    const getDades_tickets = () => {
        return dades_tickets;
    };

    // Función SET para modificar datos (evita duplicados)
    const setDades_ticketsFunc = (nouTiquet) => {
        const existe = dades_tickets.some(tiquet => tiquet.id === nouTiquet.id);
        if (!existe) {
            const nuevosTiquets = [...dades_tickets, nouTiquet];
            setDades_tickets(nuevosTiquets);
        } else {
            console.warn("El ticket con este ID ya existe.");
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Panel />} />
                    <Route path="/iniciarsesion" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/tiquet" element={<Tiquet />} />
                    <Route path="/gestion" element={<Gestion />} />

                    {/* Aquí añadimos más rutas */}
                    <Route path={`/comentaris/:id`} element={<Comentaris />} />
                    <Route path={`/comentari/:id`} element={<Comentari />} />
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
