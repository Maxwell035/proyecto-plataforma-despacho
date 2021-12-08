import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="row fluid" >

        <nav className="navbar navbar-light" style= {{ 'backgroundColor': ' #008990' }}>
            <div className="container-fluid">
                <Link to="/" className="links-menu col">Home</Link>
                <Link to="/Quienessomos" className="links-menu col">Quienes Somos</Link>
                <Link to="#" className="links-menu col">Contáctanos</Link>
                <Link to="/Login"><button type="button" className="btn btn-secondary" style= {{'fontSize' : '1.2vw' }}>Ingresar</button></Link>
            </div>
            
        </nav>
    </div>

    )
}

export default Menu
