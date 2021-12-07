import React from 'react'
import Cabecera from '../componentes/Cabecera'
import Menu from '../componentes/Menu'
import Pie from '../componentes/Pie'
import {useState} from 'react'
import Input from "../componentes/Input"


function Registro() {
    const [nombre, setNombre]= useState("")
    const [apellido, setApellido]= useState("")
    const [celular, setCelular]= useState("")
    const [correo, setCorreo]= useState("")
    const [password, setPassword]= useState("")
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
                                <Input type="text" className="form-control box" id="inputName" state={nombre} setState={setNombre}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputApellido" className="col-sm-2 col-form-label title">Apellido</label>
                            <div className="col-sm-10">
                                <Input type="text" className="form-control box" id="inputApellido" state={apellido} setState={setApellido}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputCel" className="col-sm-2 col-form-label title">Celular</label>
                            <div className="col-sm-10">
                                <Input type="number" className="form-control box" id="inputCel" state={celular} setState={setCelular}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label title">Email</label>
                            <div className="col-sm-10">
                                <Input type="email" className="form-control box" id="inputEmail3" state={correo} setState={setCorreo}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label title">Contraseña</label>
                            <div className="col-sm-10">
                                <Input type="password" className="form-control box" id="inputPassword3" state={password} setState={setPassword}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label className="form-check-label title" htmlFor="gridCheck1">
                                        Sí, acepto la política de <a href="#">privacidad</a>.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={Registro}>Registrarse</button>
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
