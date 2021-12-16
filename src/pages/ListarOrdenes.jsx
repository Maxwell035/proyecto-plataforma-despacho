import ListarOrdenes from "../componentes/CompListarOrd";
import Cabecera from '../componentes/Cabecera';
import MenuUInterno from '../componentes/MenuUInterno';
import Pie from '../componentes/Pie';
import "../componentes/ListarOrdenes.css";

const ListarOrdenesPage = () => {
    return(
        <div>
            <Cabecera/>
            <MenuUInterno/>
            <ListarOrdenes />
            <Pie/>
        </div>
    )   
}

export default ListarOrdenesPage