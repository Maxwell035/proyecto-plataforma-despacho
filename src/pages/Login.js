import React ,{useState} from 'react';
import Cabecera from '../componentes/Cabecera';
import Menu from '../componentes/Menu';
import Pie from '../componentes/Pie';
import Input from '../componentes/Input';




function Login() {
    const [user, setUser]=useState("")
    const [contrasena , setContrasena]=useState("")

    
    return (
        <>
        <Cabecera/>
        <Menu/>
        <div>
            <h1 className="titulo">Iniciar Sesión</h1>
            <form className="formulario">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label titulo" >Nombre de usuario</label>
                    <Input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su correo" state={user} setState={setUser}/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label titulo">Contraseña</label>
                    <Input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingrese su clave" state={contrasena} setState={setContrasena}/>
                </div>
                
                <button type="submit" className="btn btn-primary" >Iniciar Sesión</button>
                <p>¿No tienes una cuenta con nosotros?</p>
                <a href="/Registro"><button type="button" className="btn btn-secondary">Registrarse</button></a>
                
            </form>
        </div>
        <Pie/>
        </>
    )
}

export default Login
