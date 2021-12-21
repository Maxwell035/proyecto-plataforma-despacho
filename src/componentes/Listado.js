import "./ListarOrdenes.css"
import React, { useEffect, useState, useRef } from "react";

const Listado = () => {
    const [usuario, setUsuario] = useState([]);
    const [recarga, setRecarga] = useState(false);
    const [user,setUser] =useState({});
    const [modalState, setModalState] = useState(false);
    const nomRef = useRef();
    const apeRef = useRef();
    const usuRef = useRef();
    const celRef = useRef();
    const passRef = useRef();
    const emailRef = useRef();


  useEffect(() => {
      const token = localStorage.getItem("token");
      fetch("http://localhost:8000/usuario/listar", {
          headers: { "authorization": `Bearer ${token}` },
          method: "GET"
      })
          .then(res => res.json())
          .then(res => {
              if (res.estado === "ok")
                  setUsuario(res.data);
          })
  }, [recarga])


  const handleDelete = (usuario) => {
        
    fetch("http://localhost:8000/usuario/eliminar", {
        headers: { "content-type": "application/json" },
        method: "DELETE",
        body: JSON.stringify({ usuario })
    }).then(res => res.json())
        .then(res => {
        if (res.estado === "ok")
            alert("usuario eliminado");
            setRecarga(!recarga);

        })
}

const handleUpdate = () => {

    const nombre = nomRef.current.value;
    const apellido = apeRef.current.value;
    const usuario = usuRef.current.value;
    const celular = celRef.current.value;
    const correo = emailRef.current.value;
    const password = passRef.current.value;
    
    fetch("http://localhost:8000/usuario/editar", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({  nombre, apellido, usuario, celular, correo, password })
        
    }).then(res => res.json())
        .then(res => {
            if (res.estado === "ok"){
                alert("Cambio exitoso");
                setRecarga(!recarga);
                
            }else{
                alert(res.msg)
            }   

        }) 

}


function ejecutarModal(props) { 
     
    var item = usuario.find(item => item._id === props);
        if (item!==undefined) {
            const userr = {
                nomRef:item.nombre,
                apeRef:item.apellido,
                usuRef:item.usuario,
                celRef: item.celular,
                emailRef:item.correo,
                passRef:item.password,
                rolRef:item.rol,

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
        <div class="container">
        <h2 className="text-center w-50 m-auto ">Lista de Usuarios</h2>
            <table className="table table-hover text-center w-50 m-auto table-responsive" style={{ 'background-color':'white'}}>
           
                <thead  className='thodd'>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {usuario.map((p) => <tr key={p._id}>
                                            <td>{p.nombre} {p.apellido}</td>
                                            <td><button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modalUsuario" onClick={() => ejecutarModal(p._id)} >Editar</button> <button type="button" className="btn btn-secondary" onClick={() => handleDelete(p.usuario)} >Eliminar</button></td>
                                            
                                        </tr>)}
                </tbody>
            </table>
        </div>

        <div class="modal fade" id="modalUsuario" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" hidden  ={!modalState} >
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div className="row conteneditar">
                                <div className="col">
                                    <div className="container ">
                                        <img src="./images/Usuario.png" className="imagModal" alt="usuario"/>
                                    </div>
                                </div>

                                <div className="col ">
                                    <div className="container form1">
                                        <form>
                                            <div className="mb-2">
                                                <label htmlFor="inputNombre" className="col-form-label">Nombre</label>
                                                <input type="text" className="form-control" defaultValue={user.nomRef} ref={nomRef} aria-describedby="emailHelp"/>
                                           
                                                <label htmlFor="inputApellido" className="form-label">Apellidos</label>
                                                <input type="text" className="form-control" defaultValue={user.apeRef}  ref={apeRef}/>

                                                <label htmlFor="inputUsuario" className="form-label">Usuario</label>
                                                <input type="text" className="form-control" defaultValue={user.usuRef}  ref={usuRef}/>

                                                <label htmlFor="inputCedula" className="form-label">Celular</label>
                                                <input type="text" className="form-control" defaultValue={user.celRef}  ref={celRef}/>
                                        
                                                <label htmlFor="inputEmail" className="form-label ">Correo electrónico</label>
                                                <input type="email" className="form-control" defaultValue={user.emailRef}  ref={emailRef}/>

                                                <label htmlFor="inputpassword" className="form-label ">Password</label>
                                                <input type="password" className="form-control" defaultValue={user.passRef}  ref={passRef}/>

                                                <label htmlFor="inputRol" className="form-label ">Rol</label>
                                                <input type="text" className="form-control" defaultValue={user.rolRef} />
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleUpdate}>Guardar</button>
                        </div>
                    </div>

                </div>
            </div>
    
      </>
        
    )
}
export default Listado;