import React from 'react'
import { OrdenDespacho } from '../datos'


const ModalODD = () => {
    
    const ordenes=OrdenDespacho
    
    return (
        <div>
             {ordenes.map((p) => 
            <div class="modal fade" id="modalODD" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" >
                    <div class="modal-content" style={{'background-color': 'LightGray'}}>
                        <div class="modal-body">
                        
                            <div className="card-body">
                                <h4 className="card-title">Orden de Despacho No.{p.codigo}</h4><br/>

                                <div className="container">
                                    <div className="row">  
                                        <h6 className="card-subtitle mb-2">Informacion de Producto(s) a enviar</h6> <br/>    
                                        
                                        <div className="col-5" style={{'background': 'white', 'margin-left':'1%'}}>
                                            <table className="table table-sm">
                                                <tbody>
                                                    <tr className='thead'>
                                                        <th scope="row">Nombre:</th>
                                                        <td>{p.nombreProd}</td>
                                                    </tr> 
                                                    <br/>
                                                    <tr className='thead'>
                                                        <th scope="row">Descripcion:</th> 
                                                        <td>{p.descripcion}</td>
                                                    </tr> 
                                                    <br/>
                                                    <tr className='thead'>
                                                        <th scope="row">Peso:</th>
                                                        <td>{p.peso}</td>
                                                    </tr> 
                                                </tbody>
                                            </table>
                                        </div>
                                    
                                        <div className="col-6" style={{'margin-left':'6%'}}>
                                            <table className="table table-sm">
                                                <tbody>
                                                    <tr className='thead'>
                                                        <th scope="row">Cliente:</th>
                                                        <td>{p.cliente}</td>
                                                    </tr> <br/>
                                                    <tr className='thead'>
                                                        <th scope="row">Ruta:</th>
                                                        <td>{p.origen}-{p.destino}</td>
                                                    </tr> <br/>
                                                    <tr className='thead'>
                                                        <th scope="row">Cantidad de Camiones:</th>
                                                        <td>{p.camiones}</td>
                                                    </tr> <br/> <br/>
                                                    <tr className='thead'>
                                                        <th scope="row">Total a Pagar:</th>
                                                        <td>$ {p.precio}</td>
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
            )} 
        </div>
    )
}

export default ModalODD
