import React from 'react'
import Cabecera from '../componentes/Cabecera'
import Menu from '../componentes/Menu'
import Pie from '../componentes/Pie'
import {useState} from 'react'
import Input from "../componentes/Input"
import {Registrarse} from '../componentes/Registrarse'
//var fs = require('fs');

function Registro() {



    const [nombre, setNombre]= useState("")
    const [apellido, setApellido]= useState("")
    const [usuario, setUsuario]=useState("")
    const [celular, setCelular]= useState("")
    const [correo, setCorreo]= useState("")
    const [password, setPassword]= useState("")
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
        Registrarse(nombre, apellido, usuario, celular, correo, password);
        LimpiarCampos();
    }
    return (
        <>
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
                        
                        <button type="submit" className="btn btn-primary" onClick={(e)=>{handleButton(e, nombre, apellido, usuario, celular, correo, password)}}>Registrarse</button>
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
