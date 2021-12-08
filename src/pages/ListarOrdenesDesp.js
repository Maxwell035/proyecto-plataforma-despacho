import React from 'react'
import MenuUInterno from '../componentes/MenuUInterno';
import Cabecera from '../componentes/Cabecera';
import Pie from '../componentes/Pie';
import Button from '../componentes/Button';
import { OrdenDespacho } from '../datos';


const ListarOrdenesDesp = () => {
    const orden = OrdenDespacho
      
    return (
        <>
            <Cabecera/>
            <MenuUInterno/>
            <div className="text-center">
                <h2>Ordenes Despachadas en el Día</h2>
            </div>
            <div className='tabla1'>
            
                <table className="table" style={{ 'background-color':'white'}}>
                    <thead className='thodd'>
                        <tr> 
                            <th scope="col">No. Orden</th>
                            <th scope="col" >Cliente</th>
                            <th scope="col">Precio</th>
                            <th scope="col" ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orden.map((p) => <tr key={p}>
                                                <td>{p.codigo}</td>
                                                <td>{p.cliente}</td>
                                                <td>{p.precio}</td>
                                                <td style={{ 'background-color':'#e7e7de' }}><Button type="button" className={p} data-bs-toggle="modal"
                                                data-bs-target="#modalODD" /></td>
                                            </tr>)}
                        
                    </tbody>
                </table>    
            </div>
            <Pie/>
        </>

    )
}

export default ListarOrdenesDesp



