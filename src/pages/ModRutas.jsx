import ModRutas from "../componentes/CompModRutas";
import Cabecera from '../componentes/Cabecera';
import Menu from '../componentes/MenuAdmin';
import Pie from '../componentes/Pie';
import "../componentes/ListarOrdenes.css";

const ModificarRutasPage = () => {
    return(
        <div>
            <Cabecera/>
            <Menu/>
            <ModRutas />
            <Pie/>
        </div>
    )   
}

export default ModificarRutasPage