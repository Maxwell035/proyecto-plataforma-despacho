import React from 'react'
import Cabecera from '../componentes/Cabecera'
import Menu from '../componentes/Menu'
import Pie from '../componentes/Pie'
import {useState} from 'react'
import Input from "../componentes/Input"
//import {Registrarse} from '../componentes/Registrarse'
//var fs = require('fs');

function Registro() {
    const [msgError, setMsgError]=useState()
    const [error, setError]=useState()
    
    async function  registro(){
       
        await fetch("http://localhost:8000/usuario/registro",{
            headers:{"content-type":"application/json"},
            method:"POST",
            body: JSON.stringify({nombre, apellido,usuario, celular, correo, password, rol})
        }).then(res=> res.json())
        .then(res=>{
            if (res.estado=== "ok"){
                {window.location.href= "/login"}
            }else{
                setError(true);
                setMsgError(res.msg);
            }
        })
    }
    

    const [nombre, setNombre]= useState("")
    const [apellido, setApellido]= useState("")
    const [usuario, setUsuario]=useState("")
    const [celular, setCelular]= useState("")
    const [correo, setCorreo]= useState("")
    const [password, setPassword]= useState("")
    const [rol, setRol]=useState("")
    /*
    function LimpiarCampos(event){
        
        setNombre("")
        setApellido("")
        setUsuario("")
        setCelular("")
        setCorreo("")
        setPassword("")
        
    }
 
    function handleButton(event, nombre, apellido, usuario, celular, correo, password){
        event.preventDefault();
        Registrarse(nombre, apellido, usuario, celular, correo, password, rol);
        LimpiarCampos();
        registro();
    }*/
    return (
        <>
        {error && <div className= "alert alert-danger" role= "alert">{msgError}
        </div>}
        <Cabecera/>
        <Menu/>
        <div>
            <div className="row title">
                <h1>Registro</h1>
            </div>
            <div className="row">
                <div className="col">
                    <form className="form">
                        <div className="row mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label title">Nombre</label>
                            <div className="col-sm-10">
                                <Input type="text" className="form-control box" placeholder="Ingrese su nombre" id="inputName" value={nombre} state={nombre} setState={setNombre} Required/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputApellido" className="col-sm-2 col-form-label title">Apellido</label>
                            <div className="col-sm-10">
                                <Input type="text" className="form-control box" placeholder="Ingrese su apellido" id="inputApellido" value={apellido} state={apellido} setState={setApellido} Required/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputUsuario" className="col-sm-2 col-form-label title">Usuario</label>
                            <div className="col-sm-10">
                                <Input type="text" className="form-control box" placeholder="Ingrese su usuario" id="inputUsuario" value={usuario} state={usuario} setState={setUsuario} Required/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputCel" className="col-sm-2 col-form-label title">Celular</label>
                            <div className="col-sm-10">
                                <Input type="number" className="form-control box" placeholder="Ingrese su celular"id="inputCel" value={celular} state={celular} setState={setCelular}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label title">Email</label>
                            <div className="col-sm-10">
                                <Input type="email" className="form-control box" placeholder="Ingrese su correo electrónico" id="inputEmail3" value={correo} state={correo} setState={setCorreo} Required/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label title">Contraseña</label>
                            <div className="col-sm-10">
                                <Input type="password" className="form-control box" placeholder="Ingrese su contraseña" id="inputPassword3" value={password} state={password} setState={setPassword} Required/>
                            </div>
                        </div>
                        <div>
                        <p>Regístrate como:</p>

                        <div>
                            <input type="radio" id="cliente" name="usuario" value= "cliente" state={rol} onChange={e=>setRol(e.target.value)} />
                            <label for="cliente">Cliente</label>
                        </div>

                        <div>
                            <input type="radio" id="empleado" name="usuario" value= "empleado" state={rol} onChange={e=>setRol(e.target.value)}/>
                            <label for="empleado">Empleado</label>
                        </div>
                        
                        </div>
                        <br/>
                        <button type="button" className="btn btn-primary" onClick={registro}/*{(e)=>{handleButton(e, nombre, apellido, usuario, celular, correo, password)}}*/>Registrarse</button>
                    </form>
                </div>
                <div className="col">
                    <p className="title1">Registrate llenando este formulario</p>
                    <img src="./images/flecha.JPG" alt=""/>
                    <img src="./images/muñeca.jpg" className="muñeca1"/>
                </div>
        </div>
        </div>
        <Pie/>
        </>
    )
}

export default Registro
