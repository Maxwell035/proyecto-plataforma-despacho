
import { Link } from "react-router-dom";
const ImagenU = () => {
    return(
        <>
        <div className="row conteneditar">
        <div className="col">
        <div className="container">
            <img src="Imagen1.png" className="img imagenform" alt=""/>
            
        </div>
        </div>
        <div className="col ">
            <div className="container form">
        <form>
            <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label labels">Nombre</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label labels">Apellidos</label>
                <input type="text" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label labels">Cédula</label>
                <input type="number" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label labels">Teléfono</label>
                <input type="number" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label labels">Correo electrónico</label>
                <input type="email" className="form-control" id="exampleInputPassword1"/>
            </div>
            
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
        </div>
        </div>
        </>
    )
}

export default ImagenU