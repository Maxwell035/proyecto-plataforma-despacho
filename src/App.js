
import Cabecera from './componentes/Cabecera';
import Menu from './componentes/Menu';
import Pie from './componentes/Pie';
import Usuarios from './componentes/Usuarios';
import Listado from './componentes/Listado';
import Botoncrear from './componentes/Botoncrear';
import './styles.css';


function App() {
  return (

    <div>
      <Cabecera/>
      <Menu/>
      <Usuarios/>
      <Listado/>
      <Botoncrear/>
      <Pie/>

    </div>
  
  );
}

export default App;
