import React from 'react'
import { Link } from 'react-router-dom'
const Cabecera = () => {
    return (
        
        <header className="container-fluid" >

                           

            <div className="row fluid" style={{ 'backgroundColor': '#06174b'}}>
                <div className="col-2">
                    <a href="/"><img src="./images/logo1.jpg" alt="Logo" className="logo"/></a>
                </div>
                <div className="col-8 tituloHome">
                    <h2>Cargar Transportes y Logística Ltda.</h2>
                </div>
                <div className="col-2">
                    <Link to="/ListarOrdenes">
                    <img src="./images/user.jpg" alt="" className="user">
                    </img>
                    </Link>

                    <Link to="/Administrador">
                    <p className='tipo'>Usuario </p>
                    </Link>

                </div>
            </div>
            
            
        </header>
    
      
    )
}

export default Cabecera

