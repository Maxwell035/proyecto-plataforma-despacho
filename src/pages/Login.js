import React ,{usuarioef, useState} from 'react';
import Cabecera from '../componentes/Cabecera';
import Menu from '../componentes/Menu';
import Pie from '../componentes/Pie';
import Input from '../componentes/Input';




function Login() {
    
    const [usuario, setUsuario]=useState("")
    const [error, setError]=useState()
    const [msgError, setMsgError]=useState()
    const [password , setPassword]=useState("")
    async function  login(){
       
        await fetch("http://localhost:8000/usuario/login",{
            headers:{"content-type":"application/json"},
            method:"POST",
            body: JSON.stringify({usuario, password})
        }).then(res=> res.json())
        .then(res=>{
            if (res.estado=== "ok"){
                {window.location.href= "/Home"}
            }else{
                setError(true);
                setMsgError(res.msg);
            }
        })
    }
    

    
    return (
        <>
        {error && <div className= "alert alert-danger" role= "alert">{msgError}
        </div>}
        <Cabecera/>
        <Menu/>
        <div>
            <h1 className="titulo">Iniciar Sesión</h1>
            <form className="formulario">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label titulo" >Nombre de usuario</label>
                    <Input  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="usuarioHelp" placeholder="Ingrese su usuario" state={usuario} setState={setUsuario}/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label titulo">Contraseña</label>
                    <Input  type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingrese su clave" state={password} setState={setPassword}/>
                </div>
                
                <button type="button" className="btn btn-primary" onClick={login}>Iniciar Sesión</button>
                <p>¿No tienes una cuenta con nosotros?</p>
                <a href="/Registro"><button type="button" className="btn btn-secondary">Registrarse</button></a>
                
            </form>
        </div>
        <Pie/>
        </>
    )
}

export default Login
