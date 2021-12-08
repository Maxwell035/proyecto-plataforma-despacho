import { Link } from "react-router-dom";

const InfoUsuario = () => {
    return (
    <div className="container contenedorgrande">
        <div className="row align-items-center">
        <div className="col">
            <img src="Imagen1.png" className="img imagenusuario" alt=""/>
        </div>
    <div className="col align-items-left contenedores">
        <div className="container">
            Nombre:
            
        </div>
        <div className="container">
            Apellidos:
        </div>
        <div className="container">
            Cédula:
        </div>
        <div className="container">
            Teléfono:
        </div>
        <div className="container">
            Correo electrónico:
        </div>
        <div className="container">
            Dirección:
        </div>
        </div>
        
        </div>
  
    </div>



    )
}

export default InfoUsuario