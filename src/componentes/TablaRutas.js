import { useState } from "react"
import rutas from "./rutas"
import "./ListarOrdenes.css"

const TablaRutas = () => {
    
    function infoRutas(numRuta, LugarOrigen, LugarDestino, distancia) {
        let ruta = numRuta;
        let LOrigen = LugarOrigen;
        let LDestino = LugarDestino;
        let Dist = distancia;

        return(ruta, LOrigen, LDestino, Dist)
    }


    return(
        <div>
            <div className="row fluid p-3" >
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <h1 className="col-10 text-center">Nuestras Rutas Nacionales</h1>
                </div>
            </div>

            <div class="container">
                <table class="table text-center table-bordered border-dark">
                    <thead>
                        <tr>
                            <th scope="col">Ruta</th>
                            <th scope="col">Lugar Origen</th>
                            <th scope="col">Lugar Destino</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rutas.map((r)=>
                            <tr class=" align-items-center">
                                <td>{r.numRuta}</td>
                                <td>{r.LugarOrigen}</td>
                                <td>{r.LugarDestino}</td>
                            </tr>   
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
                    
    )   
}

export default TablaRutas