import React from 'react'
<<<<<<< HEAD

=======
import { Link } from 'react-router-dom'
>>>>>>> proyalice
const MenuUInterno = () => {
    return (
        <div className="row fluid" >
            <nav className="navbar navbar-light" style= {{ 'background-color': ' #008990' }}>
                <div className="contenedor-menu container-fluid">
<<<<<<< HEAD
                    <a href="/ListarOrdenes" className="links-menu col">Historial Ordenes de despacho</a>
                    <a href="#" className="links-menu col">Ordenes del Dia</a>
                    <a href="#" className="links-menu col">Aceptar Ordenes</a>
                    <a href="EditarRutas" className="links-menu col">Crear y Modificar Rutas</a>
=======
                    <Link to="/ListarOrdenes" className="links-menu col">Historial Ordenes de despacho</Link>
                    <Link to="/ListarOrdenesDesp" className="links-menu col">Ordenes del Dia</Link>
                    <Link to="#" className="links-menu col">Aceptar Ordenes</Link>
                    <Link to="/EditarRutas" className="links-menu col">Crear y Modificar Rutas</Link>
>>>>>>> proyalice
                </div>
                
            </nav>
        </div>
            
    )
}

export default MenuUInterno
