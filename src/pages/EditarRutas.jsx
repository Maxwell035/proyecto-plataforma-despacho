import EditarRutas from "../componentes/CompEditarRutas";
import Cabecera from '../componentes/Cabecera';
import Menu from '../componentes/MenuAdmin';
import Pie from '../componentes/Pie';
import "../componentes/ListarOrdenes.css";

const EditarRutasPage = () => {
    return(
        <div>
            <Cabecera/>
            <Menu/>
            <EditarRutas />
            <Pie/>
        </div>
    )   
}

export default EditarRutasPage