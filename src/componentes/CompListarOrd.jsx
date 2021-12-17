import React, { useEffect, useState } from "react";
import "./ListarOrdenes.css"

const ListarOrdenes = () => {

    const [listado, setListado] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("http://localhost:8000/orden/listar", {
            headers: { "authorization": `Bearer ${token}` },
            method: "POST"
        })
            .then(res => res.json())
            .then(res => {
                if (res.estado === "ok")
                    setListado(res.data);
            })
    }, [])

    return(
        <div>
            <div className="row fluid" >
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <h2 className="col-11 text-center" >Historial de Ordenes de Despacho</h2>
                    <select class="form-select m-2" aria-label="Default select example">
                        <option selected>Todos</option>
                        <option value="1">Pendiente</option>
                        <option value="2">Despachada</option>
                        <option value="3">Cancelada</option>
                        <option value="3">Finalizada</option>
                    </select>
                </div>
            </div>

            <div class="container">
                <table class="table text-center" style={{ 'background-color':'white'}}>
                    <thead  className='thodd'>
                        <tr>
                            <th scope="col">No. Orden</th>
                            <th scope="col"></th>
                            <th scope="col">Fecha</th>
                            <th scope="col"></th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                    {listado.map((p) => <tr key={p}>
                                                <td>{p.codigo}</td>
                                                <td>|</td>
                                                <td>{p.fecha}</td>
                                                <td>|</td>
                                                <td>{p.estado}</td>
                                            </tr>)}
                            
                    </tbody>
                </table>
            </div>
        </div>
    )   
}

export default ListarOrdenes