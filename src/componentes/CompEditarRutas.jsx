import React, { useEffect, useState, useRef } from "react";
import "./ListarOrdenes.css"

const EditarRutas = () => {
    const [listado, setListado] = useState([]);
    const [recarga, setRecarga] = useState(false);
    const rutaRef = useRef(); //document.getElementById("nom")
    const origenRef = useRef();
    const costoRef = useRef();
    const destRef = useRef();
    const distanciaRef = useRef();


    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("http://localhost:8000/ruta/listar", {
            headers: { "authorization": `Bearer ${token}` },
            method: "GET"
        })
            .then(res => res.json())
            .then(res => {
                if (res.estado === "ok")
                    setListado(res.data);
            })
    }, [recarga])


    const crearRuta = () =>{

        const ruta = rutaRef.current.value;
        const origen = origenRef.current.value;
        const destino = destRef.current.value;
        const distancia = distanciaRef.current.value;

        fetch("http://localhost:8000/ruta/agregar", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ ruta, origen, destino, distancia })
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok") {
                   alert('Ruta agregada exitosamente')
                    rutaRef.current.value = "";
                    origenRef.current.value = "";
                    destRef.current.value = "";
                    distanciaRef.current.value = "";
                    setRecarga(!recarga);
                } else {
                    alert(res.msg); 
                }
            })
    }

    const handleDelete = (ruta) => {
        
        fetch("http://localhost:8000/ruta/eliminar", {
            headers: { "content-type": "application/json" },
            method: "DELETE",
            body: JSON.stringify({ ruta })
        }).then(res => res.json())
            .then(res => {
            if (res.estado === "ok")
                alert("Ruta eliminada exitosamente");
                setRecarga(!recarga);
    
            })
    }

    



    const handleUpdate = (ruta) => {
        
        fetch("http://localhost:8000/ruta/editar", {
            headers: { "content-type": "application/json" },
            method: "DELETE",
            body: JSON.stringify({ ruta })
        }).then(res => res.json())
            .then(res => {
            if (res.estado === "ok")
                alert("Ruta eliminada exitosamente");
                setRecarga(!recarga);
    
            })
    }

    function editarCosto() {
      
        const costo = costoRef.current.value;
       console.log(costo);
        fetch("http://localhost:8000/costo/editar", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ costo })
        }).then(data => data.json())
            .then(data => {
                alert(data.msg); 
            })
    }

    return(
        <div>
            <div className="row fluid p-3" >
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <h2 className="col-10 text-center">Crear y modificar rutas</h2>
                </div>
            </div>

            <div className="container">
                <table className="table text-center table-bordered border-dark">
                    <thead>
                        <tr>
                            <th scope="col">Ruta</th>
                            <th scope="col">Lugar Origen</th>
                            <th scope="col">Lugar Destino</th>
                            <th scope="col">Distancia</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listado.map((r)=>
                            <tr className=" align-items-center">
                                <td>{r.ruta}</td>
                                <td>{r.origen}</td>
                                <td>{r.destino}</td>
                                <td>{r.distancia}</td>
                                <td><button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(); this.modalInsertar()}}>Editar</button> <button type="button" className="btn btn-secondary" onClick={() => handleDelete(r.ruta)} >Eliminar</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            

            
                   


            <div className="container d-flex justify-content-center align-items-center" >
                <button type="button" className="btn btn-primary btn-lg mx-4" data-bs-toggle="modal" data-bs-target="#crearUsu" >Crear nueva ruta</button> 
                <div className="modal fade" id="crearUsu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Crear nueva ruta</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="Ruta" className="col-form-label"># Ruta</label>
                                        <input type="text"  className="form-control" ref={rutaRef} />
                                        <label htmlFor="origen" className="col-form-label">Lugar Origen</label>
                                        <input type="text" className="form-control" ref={origenRef} />
                                        <label htmlFor="Destino" className="col-form-label">Lugar Destino</label>
                                        <input type="text" className="form-control" ref={destRef} />
                                        <label htmlFor="Distancia" className="col-form-label">Distancia en km</label>
                                        <input type="text" className="form-control" ref={distanciaRef}/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={crearRuta} >Guardar</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#costokm">Modificar costo por Km</button>
                <div className="modal fade" id="costokm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modificar costo por km</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="col-form-label">El costo actual por km es: $5.000</label>
                                        <h1 className="col-form-label">Ingrese el nuevo costo</h1>
                                        <input type="text" className="form-control" ref={costoRef} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-primary" onClick={editarCosto} >Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )   
}

export default EditarRutas