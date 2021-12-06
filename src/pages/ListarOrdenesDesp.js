import React from 'react'
import MenuAdmin from '../componentes/MenuAdmin';
import Cabecera from '../componentes/Cabecera';
import Pie from '../componentes/Pie';

import Button from '../componentes/Button';
import { OrdenDespacho } from '../datos';

let user= {codigo:'',cliente:'',precio:'', descripcion:'', camiones:'',origen:'',destino:'', nombreProd:'',peso:''};

const ListarOrdenesDesp = () => {
    const orden = OrdenDespacho

    

    const ModalODD = (codigo,cliente,precio, descripcion, camiones,origen,destino, nombreProd,peso) => {
    
        user.codigo=codigo;
        user.cliente=cliente;
        user.precio=precio;
        user.descripcion= descripcion;
        user.camiones=camiones;
        user.origen=origen;
        user.destino=destino;
        user.nombeProd=nombreProd;
        user.peso=peso;

        console.log('imprimir')
    }
        
            
      
    return (
        
        <>
            <Cabecera/>
            <MenuAdmin/>
            

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
                                                <td style={{ 'background-color':'#e7e7de' }}><Button type="button" className={p.codigo} data-bs-toggle="modal"
                                                data-bs-target="#modalODD" onClick={ModalODD(p.codigo,p.cliente,p.precio, p.descripcion, p.camiones,p.origen,p.destino, p.nombreProd, p.peso )}/></td>
                                            </tr>)}
                        
                    </tbody>
                </table>  
                <div className='vistaorden'>
                <div>
        
        <div className="modal fade" id="modalODD" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" >
                <div className="modal-content" style={{'background-color': 'LightGray'}}>
                    <div class="modal-body">
                    
                        <div className="card-body">
                            <h4 className="card-title">Orden de Despacho No.{user.codigo}</h4><br/>

                            <div className="container">
                                <div className="row">  
                                    <h6 className="card-subtitle mb-2">Informacion de Producto(s) a enviar</h6> <br/>    
                                    
                                    <div className="col-5" style={{'background': 'white', 'margin-left':'1%'}}>
                                        <table className="table table-sm">
                                            <tbody>
                                                <tr className='thead'>
                                                    <th scope="row">Nombre:</th>
                                                    <td>{user.nombreProd}</td>
                                                </tr> 
                                                <br/>
                                                <tr className='thead'>
                                                    <th scope="row">Descripcion:</th> 
                                                    <td>{user.descripcion}</td>
                                                </tr> 
                                                <br/>
                                                <tr className='thead'>
                                                    <th scope="row">Peso:</th>
                                                    <td>{user.peso}</td>
                                                </tr> 
                                            </tbody>
                                        </table>
                                    </div>
                                
                                    <div className="col-6" style={{'margin-left':'6%'}}>
                                        <table className="table table-sm">
                                            <tbody>
                                                <tr className='thead'>
                                                    <th scope="row">Cliente:</th>
                                                    <td>{user.cliente}</td>
                                                </tr> <br/>
                                                <tr className='thead'>
                                                    <th scope="row">Ruta:</th>
                                                    <td>{user.origen}-{user.destino}</td>
                                                </tr> <br/>
                                                <tr className='thead'>
                                                    <th scope="row">Cantidad de Camiones:</th>
                                                    <td>{user.camiones}</td>
                                                </tr> <br/> <br/>
                                                <tr className='thead'>
                                                    <th scope="row">Total a Pagar:</th>
                                                    <td>$ {user.precio}</td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>

                                </div>
                            </div>        
                        </div>                
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

                </div>  
            </div>
            <Pie/>
        </>

    )
}

export default ListarOrdenesDesp



