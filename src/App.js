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
import AceptarOrdenes from './pages/AceptarOrdenes'
import Dashboard from './pages/Dashboard';
import Integrantes from './pages/Integrantes';
 
import './styles.css';
import "./componentes/dashboard.css";
 


function App() {
  return (
 
    <BrowserRouter>
      <Routes>
      <Route path="/" element= {<Home/>}/>
        <Route path="/Quienessomos" element= {<Quienessomos/>}/>  
        <Route path="/Registro" element= {<Registro/>}/>
        <Route path="/Login" element= {<Login/>}/>
        <Route exact path="/ListarOrdenes" element={<ListarOrdenesPage />} />
        <Route exact path="/ListarOrdenesDesp" element={<ListarOrdenesDesp />} />
        <Route exact path="/EditarRutas" element={<EditarRutasPage />} />
        <Route path="/Administrador" element= {<Administrador />}/>  
        <Route path="/VerUsuario" element= {<VerUsuario/>}/>  
        <Route exact path="/EditarUsuario" element= {<EditarUsuario/>}/>
        <Route path="/CrearUsuario" element= {<CrearUsuario/>}/>
        <Route path="/NuestrasRutas" element= {<NuestrasRutas/>}/>
        <Route path="/CotizaEnvio" element= {<CotizaEnvio/>}/>
        <Route path="/Dashboard" element= { <Dashboard />}/> 
        <Route path="/Integrantes" element= { <Integrantes />}/> 
        <Route path="/AceptarOrdenes" element= { <AceptarOrdenes />}/> 

      </Routes>
 
    </BrowserRouter>
 
 
  );
}
 
export default App;