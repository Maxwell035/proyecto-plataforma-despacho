import React from 'react'
import MenuAdmin from '../componentes/MenuAdmin';
import Cabecera from '../componentes/Cabecera';
import Pie from '../componentes/Pie';

const ListarOrdenesDesp = () => {
    return (
        <>
        <Cabecera/>
        <MenuAdmin/>

        <div>
            <h5>Ordenes despachadas en el Dia</h5>
        </div>
        <div className='tabla1'>
        
            <table className="table" style={{ 'background-color':'white'}}>
                <thead>
                    <tr> 
                    <th scope="col" style={{ 'background-color':'#e7e7de' }}>No. Orden</th>
                    <th scope="col" style={{ 'background-color':'#e7e7de' }}>Cliente</th>
                    <th scope="col" style={{ 'background-color':'#e7e7de' }}>Fecha</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>001</td>
                      <td>Muebles Jamar</td>
                      <td>21-11-2021</td>
                    
                    </tr>
                    <tr>
                      <td>002</td>
                      <td>Olimpica</td>
                      <td>21-11-2021</td>
                    </tr>
                    <tr>
                      <td>003</td>
                      <td>Exito</td>
                      <td>21-11-2021</td>
                    </tr>
                </tbody>
            </table>       
        </div>

        <Pie/>
        </>

    )
}

export default ListarOrdenesDesp

