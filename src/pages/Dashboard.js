import React from 'react'
import { Link } from 'react-router-dom'
import Cabecera from '../componentes/Cabecera'


const Dashboard = () => {
    return (
        <>
            <Cabecera/>
            <div class="container-fluid">
                <div class="row">
                    <div class="barra-lateral col-12 col-sm-auto">
                        <nav class="menu d-flex d-sm-block justify-content-center flex-wrap">
                            <Link to="/" className="links-menu col"><i class="fas fa-home"></i> Home</Link> 
                            <Link to="/Administrador" className="links-menu col"><i class="fas fa-user-cog"></i> Administrador</Link> 
                            <Link to="/ListarOrdenes" className="links-menu col"> <i class="fas fa-user"></i> Usuario Interno</Link> 
                            <Link to="/Integrantes" className="links-menu col"><i class="fas fa-users"></i> Integrantes</Link> 
                            
                        </nav>
                    </div>
                    <main class="main col">
                        <div class="row justify-content-center align-content-center text-center">
                            <div class="principal">
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            
    </>
    
    )
}

export default Dashboard
