import React from 'react'

const Menu = () => {
    return (
        <div className="row fluid" >
            <nav className="navbar navbar-light" style= {{ 'background-color': ' #008990' }}>
                <div className="container-fluid">
                    <a href="#" className="col">Home</a>
                    <a href="#" className="col">Quienes Somos</a>
                    <a href="#" className="col">Contáctanos</a>
                    <a href="#"><button type="button" className="btn btn-secondary" style= {{'font-size' : '2vw' }}>Ingresar</button></a>
                </div>
                
            </nav>
        </div>
    )
}

export default Menu
