import React, { useEffect, useState } from "react";
import "./ListarOrdenes.css";

const TablaRutas = () => {

    const [listado, setListado] = useState([]);

    
    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("http://localhost:8000/ruta/listar", {
            headers: { "authorization": `Bearer ${token}` },
            method: "GET"
        })
            .then(res => res.json())
            .then(res => {
                if (res.estado === "ok")
                    setListado(res.data);
            })
    }, [])


    return(

         <div className="container">
         <h3 className='col-12 text-center m-4' >Nuestras Rutas</h3>
                <table className="table text-center table-bordered border-dark m-4">
                    <thead>
                        <tr>
                            <th scope="col">Ruta</th>
                            <th scope="col">Lugar Origen</th>
                            <th scope="col">Lugar Destino</th>
                            <th scope="col">Distancia</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {listado.map((r)=>
                            <tr className=" align-items-center">
                                <td>{r.ruta}</td>
                                <td>{r.origen}</td>
                                <td>{r.destino}</td>
                                <td>{r.distancia}</td>
                               
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
                    
    )   
}

export default TablaRutas