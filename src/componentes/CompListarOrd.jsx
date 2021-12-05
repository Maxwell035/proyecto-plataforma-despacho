import { useState } from "react"
import rutas from "./rutas"
import "./ListarOrdenes.css"
import { OrdenDespacho } from '../datos'

const ListarOrdenes = () => {

    const ordenes=OrdenDespacho

    const [listaOrdenes, setListaOrdenes] = useState(ordenes);

    const buscaOrdenes = (evento) => {
        setListaOrdenes(        
            ordenes.filter(o => o.estado.toLowerCase().includes
            (evento.target.value.toLowerCase())))
    };

    return(
        <div>
            <div className="row fluid" >
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <h1 className="col-11 text-center">Mi historial de ordenes de despacho</h1>
                    <select class="form-select m-2" aria-label="Default select example" onChange={buscaOrdenes}>
                        <option selected value="">Todos</option>
                        <option value="Pendiente">Pendiente</option>
                        <option value="Despachado">Despachado</option>
                        <option value="Cancelado">Cancelado</option>
                        <option value="Finalizado">Finalizado</option>
                    </select>
                </div>
            </div>

            <div class="container">
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">No. Orden</th>
                            <th scope="col"></th>
                            <th scope="col">Precio</th>
                            <th scope="col"></th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaOrdenes.map((o)=>
                            <tr style={{ 'background-color': '#fff'}}>
                                <td>{o.codigo}</td>
                                <td>|</td>
                                <td>{o.precio}</td>
                                <td>|</td>
                                <td>{o.estado}</td>
                            </tr>
                        )}                        
                    </tbody>
                </table>
            </div>
        </div>
    )   
}

export default ListarOrdenes