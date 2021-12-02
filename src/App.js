
import Cabecera from './componentes/Cabecera';
import Home from './componentes/Home';
import Menu from './componentes/Menu';
import Pie from './componentes/Pie';
import './styles.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Registro from './componentes/Registro';
import Login from './componentes/Login';
import Quienessomos from './componentes/Quienessomos';

function App() {
  return (

    <BrowserRouter>
      <Cabecera/>
      <Menu/>
      <Routes>
        <Route path="/Quienessomos" element= {<Quienessomos/>}/>  
        <Route path="/Registro" element= {<Registro/>}/>
        <Route path="/Login" element= {<Login/>}/>
        <Route path="/" element= {<Home/>}/>
      </Routes>
      <Pie/>

    </BrowserRouter>
  
  );
}

export default App;
