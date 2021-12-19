
const ImagenU = () => {

    
    return(
        <>
        <div className="row conteneditar">
            <div className="col">
                <div className="container ">
                    <img src="Imagen1.png" className="img imagenform " alt=""/>
                </div>
            </div>

            <div className="col ">
                <div className="container form1">
                    <form>
                        <div className="mb-2">
                            <label for="inputNombre" className="form-label labels">Nombre</label>
                            <input type="text" className="form-control" id="nom" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-2">
                            <label for="inputApellido" className="form-label labels">Apellidos</label>
                            <input type="text" className="form-control" id="ape"/>
                        </div>
                        <div className="mb-2">
                            <label for="inputCedula" className="form-label labels">Cédula</label>
                            <input type="text" className="form-control" id="cedu"/>
                        </div>
                        <div className="mb-2">
                            <label for="inputTelefono" className="form-label labels">Teléfono</label>
                            <input type="text" className="form-control" id="tel"/>
                        </div>
                        <div className="mb-2">
                            <label for="inputEmail" className="form-label labels">Correo electrónico</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Editar</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default ImagenU