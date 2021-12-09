import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ListarOrdenesDesp from './pages/ListarOrdenesDesp';
import ListarOrdenesPage from './pages/ListarOrdenes';
import EditarRutasPage from './pages/EditarRutas';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Quienessomos from './pages/Quienessomos';
import Home from './pages/Home';
import VerUsuario from './pages/VerUsuario';
import Administrador from './pages/Administrador';
import EditarUsuario from './pages/EditarUsuario';
import CrearUsuario from './pages/CrearUsuario';
import NuestrasRutas from './pages/NuestrasRutas';
import CotizaEnvio from './pages/CotizaEnvio';
import Dashboard from './pages/Dashboard';
import './styles.css';
import "./componentes/ListarOrdenes.css";
import './componentes/dashboard.css';


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
        <Route path="/dashboard" element= { <Dashboard />}/>  
        <Route path="/CotizaEnvio" element= {<CotizaEnvio/>}/>
      </Routes>
 
    </BrowserRouter>
 
 
  );
}
 
export default App;
