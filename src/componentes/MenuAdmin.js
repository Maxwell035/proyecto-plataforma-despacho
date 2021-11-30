import React from 'react'

const MenuAdmin = () => {
    return (
        <div className="row fluid" >
            <nav className="navbar navbar-light" style= {{ 'background-color': ' #008990' }}>
                <div className="container-fluid">
                    <a href="#" className="col">Historial Ordenes de despacho</a>
                    <a href="#" className="col">Ordenes del Dia</a>
                    <a href="#" className="col">Aceptar Ordenes</a>
                    <a href="#" className="col">Crear y Modificar Rutas</a>
                    
                </div>
                
            </nav>
        </div>
            
    )
}

export default MenuAdmin
