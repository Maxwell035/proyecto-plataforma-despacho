import React from 'react'
import Cabecera from '../componentes/Cabecera';
import Menu from '../componentes/Menu';
import Pie from '../componentes/Pie';
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
        <Cabecera/>
        <Menu/>
        <div className="contenedor">
            <div>
                <img src="./images/banner.jpeg" alt="" className=" banner"/>
            </div>
            <div className="row">
                <div className="col"></div>
                    <div className=" col box">
                        <p className="rutas">Nuestras Rutas</p>
                        <Link to="/NuestrasRutas"><img src="./images/mapa.jpg" alt="" className="btn1"/></Link>
                    </div>
                    <div className="col">
                        <p className="legend">¡Tus envíos a donde quieras!</p>
                    </div>
                    <div className="col">
                        <img src="./images/muñeca.png" alt="" id="muñeca"/>
                    </div>
                    <div className="col box">
                        <p className="rutas">Cotiza tu envío</p>
                        <Link to="./CotizaEnvio"><img src="./images/carro.jpg" alt="" className="btn1"/></Link>
                    </div>
                <div className="col"></div>
            </div>
        </div>
        
        <Pie/>
        </>
    )
}

export default Home
