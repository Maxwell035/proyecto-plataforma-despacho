
import React, { useEffect, useState } from "react";
import MenuUInterno from '../componentes/MenuUInterno';
import Cabecera from '../componentes/Cabecera';
import Pie from '../componentes/Pie';
import Input from '../componentes/Input';
import Button from '../componentes/Button';



const ListarOrdenesDesp = () => {

    const [code,setCode] =useState();    
    const [user,setUser] =useState({});
    const [modalState, setModalState] = useState(false);  
    const [listado, setListado] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("http://localhost:8000/orden/listar", {
            headers: { "authorization": `Bearer ${token}` },
            method: "POST"
        })
            .then(res => res.json())
            .then(res => {
                if (res.estado === "ok")
                    setListado(res.data);
            })
    }, [])


    const ejecutarModal = (event) => { 
        event.preventDefault();
        var item = listado.find(item => item.codigo === parseInt(code));
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
                            <th scope="col"></th>
                            <th scope="col" >Cliente</th>
                            <th scope="col"></th>
                            <th scope="col">Precio</th>
                            <th scope="col" ></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {listado.map((p) => <tr key={p}>
                                                <td>{p.codigo}</td>
                                                <td>|</td>
                                                <td>{p.cliente}</td>
                                                <td>|</td>
                                                <td>{p.precio}</td>
                                            </tr>)}
                    </tbody>
                </table>
                <Input
                            type="text"
                            name="consulta"
                            id="consulta"
                            value="Consulta"
                            required="required"
                            setState={setCode}
                            state={code}
                        />
                <Button type="button" className="" data-bs-toggle="modal"
                  data-bs-target="#modalODD" onClick={ejecutarModal}/>
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
            <Pie/>
        </>

    )
}

export default ListarOrdenesDesp