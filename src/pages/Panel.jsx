import TiquetsPendents from "../components/TiquetsPendents";
import TiquetsResolts from "../components/TiquetsResolts";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Panel() {
    if(localStorage.getItem("user") == null){
        window.location.href = "/iniciarsesion";
    }
    console.log('Panel cargado');
    
        
    

    return (
        <div className="container mt-5">
            <h1>Administración de incidencias</h1>
            <button className="btn btn-primary ms-2 d-flex justify-content-end">
            <Link className='nav-link' to="/tiquet">Crear ticket</Link>
          </button>
          
          


            
            
    <TiquetsPendents />
    <TiquetsResolts />

    
        </div>
    );
}
