import React from 'react'

import { Link } from 'react-router-dom'


const MenuUInterno = () => {
    return (
        <div className="row fluid" >
            <nav className="navbar navbar-light" style= {{ 'background-color': ' #008990' }}>
                <div className="contenedor-menu container-fluid">

                    <Link to="/ListarOrdenes" className="links-menu col">Historial Ordenes de despacho</Link>
                    <Link to="/ListarOrdenesDesp" className="links-menu col">Ordenes del Dia</Link>
                    <Link to="/AceptarOrdenes" className="links-menu col">Aceptar Ordenes</Link>
                    <Link to="/EditarRutas" className="links-menu col">Crear y Modificar Rutas</Link>



                </div>
                
            </nav>
        </div>
            
    )
}

export default MenuUInterno
