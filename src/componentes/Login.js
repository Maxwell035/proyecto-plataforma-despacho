import React from 'react'

function Login() {
    return (
        <div>
            <h1 class="titulo">Iniciar Sesión</h1>
            <form className="formulario">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label titulo" >Nombre de usuario</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su correo"/>
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label titulo">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingrese su clave"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                <p>¿No tienes una cuenta con nosotros?</p>
                <a href="/Registro"><button type="button" className="btn btn-secondary">Registrarse</button></a>
                
            </form>
        </div>
    )
}

export default Login
