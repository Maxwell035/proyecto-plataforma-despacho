import React from 'react'



function Home() {
    return (
        <div>
            <img src="./images/banner.jpeg" alt="" class="banner"/>
        <div className="contenedor">
            <div className="row">
                <div className="col"></div>
                    <div className=" col box">
                        <p className="rutas">Nuestras Rutas</p>
                        <a href="#"><img src="./images/mapa.jpg" alt="" class="btn1"/></a>
                    </div>
                <div className="col">
                    <p className="legend">¡Tus envíos a donde quieras!</p>
                </div>
                <div className="col">
                    <img src="./images/muñeca.png" alt="" id="muñeca"/>
                </div>
                <div className="col box">
                    <p className="rutas">Cotiza tu envío</p>
                    <a href="#"><img src="./images/carro.jpg" alt="" className="btn1"/></a>
                </div>
                <div class="col"></div>
            </div>
        </div>
        </div>
    )
}

export default Home