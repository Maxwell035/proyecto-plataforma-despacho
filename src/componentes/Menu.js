import React from 'react'

const Menu = () => {
    return (
        <div className="row fluid" >

        <nav className="navbar navbar-light" style= {{ 'backgroundColor': ' #008990' }}>
            <div className="container-fluid">
                <a href="/" className="links-menu col">Home</a>
                <a href="/Quienessomos" className="links-menu col">Quienes Somos</a>
                <a href="#" className="links-menu col">Contáctanos</a>
                <a href="/Login"><button type="button" className="btn btn-secondary" style= {{'fontSize' : '1.2vw' }}>Ingresar</button></a>
            </div>
            
        </nav>
    </div>

    )
}

export default Menu
