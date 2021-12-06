import React from 'react'

function ModalODD (codigo,cliente,precio, descripcion, camiones,origen,destino, nombreProd,peso) {
    
   
    console.log('ímprimir');
    
        <div>
    
            <div class="modal fade" id="modalODD" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" >
                    <div class="modal-content" style={{'background-color': 'LightGray'}}>
                        <div class="modal-body">
                        
                            <div className="card-body">
                                <h4 className="card-title">Orden de Despacho No.{codigo}</h4><br/>

                                <div className="container">
                                    <div className="row">  
                                        <h6 className="card-subtitle mb-2">Informacion de Producto(s) a enviar</h6> <br/>    
                                        
                                        <div className="col-5" style={{'background': 'white', 'margin-left':'1%'}}>
                                            <table className="table table-sm">
                                                <tbody>
                                                    <tr className='thead'>
                                                        <th scope="row">Nombre:</th>
                                                        <td>{nombreProd}</td>
                                                    </tr> 
                                                    <br/>
                                                    <tr className='thead'>
                                                        <th scope="row">Descripcion:</th> 
                                                        <td>{descripcion}</td>
                                                    </tr> 
                                                    <br/>
                                                    <tr className='thead'>
                                                        <th scope="row">Peso:</th>
                                                        <td>{peso}</td>
                                                    </tr> 
                                                </tbody>
                                            </table>
                                        </div>
                                    
                                        <div className="col-6" style={{'margin-left':'6%'}}>
                                            <table className="table table-sm">
                                                <tbody>
                                                    <tr className='thead'>
                                                        <th scope="row">Cliente:</th>
                                                        <td>{cliente}</td>
                                                    </tr> <br/>
                                                    <tr className='thead'>
                                                        <th scope="row">Ruta:</th>
                                                        <td>{origen}-{destino}</td>
                                                    </tr> <br/>
                                                    <tr className='thead'>
                                                        <th scope="row">Cantidad de Camiones:</th>
                                                        <td>{camiones}</td>
                                                    </tr> <br/> <br/>
                                                    <tr className='thead'>
                                                        <th scope="row">Total a Pagar:</th>
                                                        <td>$ {precio}</td>
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
    
}


export {ModalODD} 