import React from 'react'
import MenuAdmin from './componentes/MenuAdmin';
import Cabecera from './componentes/Cabecera';
import Pie from './componentes/Pie';

const ListarOrdenesDesp = () => {
    return (
        <div>
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
                        <th scope="col" style={{ 'background-color':'#e7e7de' }}>Origen</th>
                        <th scope="col" style={{ 'background-color':'#e7e7de' }}>Destino</th>
                        <th scope="col" style={{ 'background-color':'#e7e7de' }}>Camiones</th>
                        <th scope="col" style={{ 'background-color':'#e7e7de' }}>Valor</th>
                        <th scope="col" style={{ 'background-color':'#e7e7de' }}>Producto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>001</td>
                        <td>Muebles Jamar</td>
                        <td>Barranquilla</td>
                        <td>Bogota</td>
                        <td>2</td>
                        <td>1000000</td>
                        <td>Juegos de mesa</td>
                        
                        </tr>
                        <tr>
                        <td>002</td>
                        <td>Olimpica</td>
                        <td>Barranquilla</td>
                        <td>Medellin</td>
                        <td>1</td>
                        <td>600000</td>
                        <td>Televisores</td>
                        </tr>
                        <tr>
                        <td>003</td>
                        <td>Exito</td>
                        <td>Barranquilla</td>
                        <td>Manizales</td>
                        <td>1</td>
                        <td>300000</td>
                        <td>Neveras</td>
                        </tr>
                    </tbody>
                </table>       
            </div>
    
            <Pie/>
      </div>
    )
}

export default ListarOrdenesDesp

