
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Listado = () => {
  const [usuario, setUsuario] = useState([]);
  const [recarga, setRecarga] = useState(false);

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

const handleUpdate = (usuario) => {
        
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
                                            <td><button type="button" className="btn btn-secondary" onClick={() => handleUpdate(p.usuario)} >Editar</button> <button type="button" className="btn btn-secondary" onClick={() => handleDelete(p.usuario)} >Eliminar</button></td>
                                            
                                        </tr>)}
                </tbody>
            </table>
        </div>
    
      </>
        
    )
}
export default Listado;