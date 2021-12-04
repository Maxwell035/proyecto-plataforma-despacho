import { useState } from "react"
import rutas from "./rutas"
import "./ListarOrdenes.css"

const ListarOrdenes = () => {
    return(
        <div>
            <div className="row fluid" >
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <h1 className="col-11 text-center">Mi historial de ordenes de despacho</h1>
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
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">No. Orden</th>
                            <th scope="col"></th>
                            <th scope="col">Fecha</th>
                            <th scope="col"></th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rutas.map((r)=>
                            <tr style={{ 'background-color': '#fff'}}>
                                <td>1</td>
                                <td>|</td>
                                <td>20/11/2021</td>
                                <td>|</td>
                                <td>Pendiente</td>
                            </tr>
                        )}                        
                    </tbody>
                </table>
            </div>
        </div>
    )   
}

export default ListarOrdenes