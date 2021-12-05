import ListarOrdenes from "../componentes/CompListarOrd";
import Cabecera from '../componentes/Cabecera';
import Menu from '../componentes/MenuAdmin';
import Pie from '../componentes/Pie';
import "../componentes/ListarOrdenes.css";

const ListarOrdenesPage = () => {
    return(
        <div>
            <Cabecera/>
            <Menu/>
            <ListarOrdenes />
            <Pie/>
        </div>
    )   
}

export default ListarOrdenesPage