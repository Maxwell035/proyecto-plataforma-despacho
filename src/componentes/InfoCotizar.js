import { Link } from "react-router-dom";
const InfoCotizar = () => {
    return(
        <>
        <h1 className="cotiza">Cotiza Tu Envío</h1>
    <div className="container col1 ">
        <div className="row">
         <div className="col">
            <div className="col">
            <p className="legend2 mx-auto">
                Recuerda que para poder generar una orden de despacho debes estar registrado con nosotros
            </p>
            </div>
            <div>
            <img src="./images/muñeca.png" className="muñeca2"/>
            <img src="./images/fecha.png" className="flecha"/>
            </div>
         </div>
         
         <div className="col">
             <div className="texto1">
             1. Selecciona una ruta
             </div>
             
             <select class="form-select botonruta " aria-label="Default select example">
               
                <option value="1"className="botones">Ruta 1</option>
                <option value="2"className="botones">Ruta 2</option>
                <option value="3"className="botones">Ruta 3</option>
                <option value="4"className="botones">Ruta 4</option>
                <option value="5"className="botones">Ruta 5</option>
                <option value="6"className="botones">Ruta 6</option>
                <option value="7"className="botones">Ruta 7</option>
                <option value="8"className="botones">Ruta 8</option>
                <option value="n"className="botones">Ruta n</option>
             </select>
             
             <div className="texto1">
             2. ¿Cuántos camiones necesitas?
             </div>
             
                <form>
                    <div className="mb-2">
                    <input type="text" className="form-control casilla"  placeholder="Digita numero" id="nom" aria-describedby="emailHelp"/>
                    </div>
                </form>
             
             <div className="texto2">
             Valor x Km: $
             </div>

             <div className="texto3">
             El valor de tu envío es : $
             </div>

             <div className="texto4">
             Elaboremos tu Orden de Despacho
             </div>
            <div className="botonclick">
            <button type="button" class="btn btn-primary botonclick1">Haz click aquí</button>
            </div>
        </div>
        </div>
    </div>
    </>

    )
}
export default InfoCotizar