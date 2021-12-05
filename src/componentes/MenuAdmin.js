import React from 'react'

const MenuAdmin = () => {
    return (
        <div className="row fluid" >
            <nav className="navbar navbar-light" style= {{ 'background-color': ' #008990' }}>
                <div className="contenedor-menu container-fluid">
                    <a href="/ListarOrdenes" className="links-menu col">Historial Ordenes de despacho</a>
                    <a href="#" className="links-menu col">Ordenes del Dia</a>
                    <a href="#" className="links-menu col">Aceptar Ordenes</a>
                    <a href="EditarRutas" className="links-menu col">Crear y Modificar Rutas</a>
                </div>
                
            </nav>
        </div>
            
    )
}

export default MenuAdmin
