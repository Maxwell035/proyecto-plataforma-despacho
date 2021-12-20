import React, { useEffect, useState } from "react";
import Input from '../componentes/Input';
import Button from '../componentes/Button';
import "./ListarOrdenes.css"

const ListarOrdenes = () => {

    const [code,setCode] =useState();    
    const [user,setUser] =useState({});
    const [modalState, setModalState] = useState(false);  
    const [listado, setListado] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("http://localhost:8000/orden/listar", {
            headers: { "authorization": `Bearer ${token}` },
            method: "GET"
        })
            .then(res => res.json())
            .then(res => {
                if (res.estado === "ok")
                    setListado(res.data);
            })
    }, [])

    function ejecutarModal (props) { 
       
        var item = listado.find(item => item.codigo === parseInt(props));
            if (item!==undefined) {
                const userr = {
                    codigo:item.codigo,
                    cliente:item.cliente,
                    precio:item.precio,
                    descripcion: item.descripcion,
                    camiones:item.camiones,
                    origen:item.origen,
                    destino:item.destino,
                    nombreProd:item.nombreProd,
                    peso:item.peso

                }
                setUser(userr);
                setModalState(true);
            } else{
                setModalState(false);
                alert("Dato invalido");
                console.log(document.getElementsByClassName("modal-backdrop fade show")[0].style.display = "none");
            }
  
    }   


   function  consultar(){
        
        const estado = document.getElementById('select').value;
        fetch("http://localhost:8000/orden/consultarE", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ estado })
        }).then(res => res.json())
            .then(res => {
            if (res.estado === "ok")
                setListado(res.data);
            })
    }


    return(
        <div>
            <div className="row fluid" >
                <div className="container-fluid d-flex justify-content-center align-items-center m-4">
                    <h3 className="col-11 text-center" >Historial de Ordenes de Despacho</h3>
                    <select class="form-select m-1" id="select" aria-label="Default select example" onChange={consultar}>
                        <option selected>Estado</option>
                        <option value="pendiente">Pendiente</option>
                        <option value="despachado">Despachado</option>
                        <option value="cancelado">Cancelado</option>
                        <option value="finalizado">Finalizado</option>
                    </select>
                </div>
            </div>

            <div class="container">
                <table class="table table-hover text-center w-75 m-auto table-responsive" style={{ 'background-color':'white'}}>
                    <thead  className='thodd'>
                        <tr>
                            <th scope="col">No. Orden</th>
                            <th scope="col"></th>
                            <th scope="col">Fecha</th>
                            <th scope="col"></th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {listado.map((p) => <tr key={p}>
                                                <td>{p.codigo}</td>
                                                <td>|</td>
                                                <td>{new Date (p.fecha).toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})}</td>
                                                <td>|</td>
                                                <td>{p.estado}</td>
                                                <td><button type="button" class="btn btn-primary mx-4" data-bs-toggle="modal" data-bs-target="#modalODD" onClick={()=>ejecutarModal(p.codigo)} >Ver detalle</button> </td>
                                            </tr>)}
                            
                    </tbody>
                </table>
               

                <div className='vistaorden'>
                <div>

                    <div className="modal fade" id="modalODD" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" hidden  ={!modalState}>        
                    <div className="modal-dialog modal-lg" >
                        <div className="modal-content" style={{'background-color': '#c4c4c4'}}>
                            <div class="modal-body">
                            
                                <div className="card-body">
                                    <h4 className="card-title">Orden de Despacho No.{user.codigo}</h4><br/>

                                    <div className="container">
                                        <div className="row">  
                                            <h6 className="card-subtitle mb-2">Informacion de Producto(s) a enviar</h6> <br/>    
                                            
                                            <div className="col-5" style={{'background': 'white', 'margin-left':'2%'}}>
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
                                                        <br/><br/>
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
          
        </div>
    )   
}

export default ListarOrdenes