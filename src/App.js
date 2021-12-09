import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ListarOrdenesDesp from './Pages/ListarOrdenesDesp';
import ListarOrdenesPage from './Pages/ListarOrdenes';
import EditarRutasPage from './Pages/EditarRutas';
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import Quienessomos from './Pages/Quienessomos';
import Home from './Pages/Home';
import VerUsuario from './Pages/VerUsuario';
import Administrador from './Pages/Administrador';
import EditarUsuario from './Pages/EditarUsuario';
import CrearUsuario from './Pages/CrearUsuario';
import NuestrasRutas from './Pages/NuestrasRutas';
import CotizaEnvio from './Pages/CotizaEnvio';

import './styles.css';
import "./componentes/ListarOrdenes.css";
 
function App() {
  return (
 
    <BrowserRouter>
      <Routes>
      <Route path="/" element= {<Home/>}/>
        <Route path="/Quienessomos" element= {<Quienessomos/>}/>  
        <Route path="/Registro" element= {<Registro/>}/>
        <Route path="/Login" element= {<Login/>}/>
        <Route path='/listarODD' element={<ListarOrdenesDesp/>}/>
        <Route path="/ListarOrdenes" element={<ListarOrdenesPage />} />
        <Route path="/ListarOrdenesDesp" element={<ListarOrdenesDesp />} />
        <Route path="/EditarRutas" element={<EditarRutasPage />} />
        <Route path="/Administrador" element= {<Administrador/>}/>  
        <Route path="/VerUsuario" element= {<VerUsuario/>}/>  
        <Route path="/EditarUsuario" element= {<EditarUsuario/>}/>
        <Route path="/CrearUsuario" element= {<CrearUsuario/>}/>
        <Route path="/NuestrasRutas" element= {<NuestrasRutas/>}/>
        <Route path="/CotizaEnvio" element= {<CotizaEnvio/>}/>
      </Routes>
 
    </BrowserRouter>
 
 
  );
}
 
export default App;
