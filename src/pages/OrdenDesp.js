import React from 'react'
import Cabecera from '../componentes/Cabecera'
import MenuUInterno from '../componentes/MenuUInterno'
import { OrdenDespacho } from '../datos'

const OrdenDesp = () => {

    const ordenes = OrdenDespacho
    
    return (
        <>
            <Cabecera/>
            <MenuUInterno/>
            {ordenes.map((p) => <div className="card" style= {{ width: '70%' }}>
                                    
                                        <div className="card-body">
                                            <h4 className="card-title">Orden de Despacho No.{p.codigo}</h4>
                                            <div className="container">
                                                <div className="row">  
                                                    <h6 className="card-subtitle mb-2">Informacion de Producto(s) a enviar</h6>     
                                                    
                                                    <div className="col-6" style={{'background': 'white'}}>
                                                        <table className="table table-sm">
                                                            <tbody>
                                                                <tr className='thead'>
                                                                    <th scope="row">Nombre:</th>
                                                                    <td>{p.nombreProd}</td>
                                                                </tr>
                                                                <tr className='thead'>
                                                                    <th scope="row">Descripcion:</th>
                                                                    <td>{p.descripcion}</td>
                                                                </tr>
                                                                <tr className='thead'>
                                                                    <th scope="row">Peso:</th>
                                                                    <td>{p.peso}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                
                                                    <div className="col-4">
                                                        <table className="table table-sm">
                                                            <tbody>
                                                                <tr className='thead'>
                                                                    <th scope="row">Cliente:</th>
                                                                    <td>{p.cliente}</td>
                                                                </tr>
                                                                <tr className='thead'>
                                                                    <th scope="row">Ruta:</th>
                                                                    <td>{p.origen}-{p.destino}</td>
                                                                </tr>
                                                                <tr className='thead'>
                                                                    <th scope="row">Cantidad de Camiones:</th>
                                                                    <td>{p.camiones}</td>
                                                                </tr>
                                                            </tbody>
    
                                                        </table>
                                                    </div>

                                                </div>
                                            </div>        
                                        </div>
                                        
                                    </div>
                                )}                           
        </>
    )
}

export default OrdenDesp
