import React from 'react'

function Registro() {
    return (
        <div>
            <div className="row title">
                <h1>Registro</h1>
            </div>
            <div className="row">
                <div className="col">
                    <form className="form">
                        <div className="row mb-3">
                            <label for="inputName" className="col-sm-2 col-form-label title">Nombre</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control box" id="inputName"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputApellido" className="col-sm-2 col-form-label title">Apellido</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control box" id="inputApellido"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputCel" className="col-sm-2 col-form-label title">Celular</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control box" id="inputCel"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputEmail3" className="col-sm-2 col-form-label title">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control box" id="inputEmail3"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label title">Contraseña</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control box" id="inputPassword3"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label className="form-check-label title" for="gridCheck1">
                                        Sí, acepto la política de <a href="#">privacidad</a>.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Registrarse</button>
                    </form>
                </div>
                <div className="col">
                    <p className="title1">Registrate llenando este formulario</p>
                    <img src="./images/flecha.JPG" alt=""/>
                    <img src="./images/muñeca.jpg" className="muñeca1"/>
                </div>
        </div>
            
        
        </div>
    )
}

export default Registro
