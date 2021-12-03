import React from 'react'
import MenuAdmin from '../componentes/MenuAdmin';
import Cabecera from '../componentes/Cabecera';
import Pie from '../componentes/Pie';
import ModalODD from '../componentes/ModalODD';
import Button from '../componentes/Button';
import { OrdenDespacho } from '../datos';


const ListarOrdenesDesp = () => {
    const orden = OrdenDespacho
      
    return (
        <>
            <Cabecera/>
            <MenuAdmin/>
            <ModalODD/>
            <div>
                <h5>Ordenes despachadas en el Dia</h5>
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



