import { Link } from "react-router-dom";
const Formulario1 = () => {
    return(
        <>
        <div className="col mx-auto">
            <div className="container form1">
        <form>
            <div className="mb-2">
                <label for="exampleInputEmail1" className="form-label labels">Nombre</label>
                <input type="text" className="form-control" id="nom" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-2">
                <label for="exampleInputPassword1" className="form-label labels">Apellidos</label>
                <input type="text" className="form-control" id="ape"/>
            </div>
            <div className="mb-2">
                <label for="exampleInputPassword1" className="form-label labels">Cédula</label>
                <input type="number" className="form-control" id="cedu"/>
            </div>
            <div className="mb-2">
                <label for="exampleInputPassword1" className="form-label labels">Teléfono</label>
                <input type="number" className="form-control" id="tel"/>
            </div>
            <div className="mb-2">
                <label for="exampleInputPassword1" className="form-label labels">Correo electrónico</label>
                <input type="email" className="form-control" id="email"/>
            </div>
                <button type="submit" className="btn btn-primary botoneditar">Guardar</button>
                <button type="submit" className="btn btn-primary botoneditar" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="listar()">Listar</button>
            
            
            
            </form>
        </div>
        </div>
   
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default Formulario1