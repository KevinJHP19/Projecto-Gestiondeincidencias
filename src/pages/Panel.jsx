import TiquetsPendents from "../components/TiquetsPendents";
import TiquetsResolts from "../components/TiquetsResolts";

export default function Panel() {
    console.log('Panel cargado');
    
    
    return (
        <div className="container mt-5">
            <h1>Administración de incidencias</h1>
            
    <TiquetsPendents />
    <TiquetsResolts />

    
        </div>
    );
}
