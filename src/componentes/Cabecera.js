import React from 'react'
import { Link } from 'react-router-dom'

const Cabecera = () => {
    return (
        
        <header>             

            <div className="row fluid" style={{ 'backgroundColor': '#06174b'}}>
                <div className="col-2">
                    <a href="/"><img src="./images/logo1.jpg" alt="Logo" className="logo"/></a>
                </div>
                <div className="col-8 tituloHome">
                    <h2>Cargar Transportes y Logística Ltda.</h2>
                </div>
                <div className="col-2">
                    
                    <img src="./images/user.jpg" alt="" className="user">
                    </img>
<<<<<<< HEAD
                    </Link>

                    <p className='tipo'>Usuario </p>      
=======
                    
                    <p className='tipo'>Usuario </p>
                    
>>>>>>> b4e285c17928d6b5b7b2b9741f8b765b6b73594a

                </div>
            </div>
            
            
        </header>
    
      
    )
}

export default Cabecera

