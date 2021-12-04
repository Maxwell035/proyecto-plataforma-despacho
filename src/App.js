import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListarOrdenesDesp from './pages/ListarOrdenesDesp';
import OrdenDesp from './pages/OrdenDesp';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Quienessomos from './pageses/Quienessomos';
import Home from './pages/Home';
import './styles.css';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/Quienessomos" element= {<Quienessomos/>}/>  
        <Route path="/Registro" element= {<Registro/>}/>
        <Route path="/Login" element= {<Login/>}/>
        <Route path="/" element= {<Home/>}/>
        <Route path='/listarODD' element={<ListarOrdenesDesp/>}/>
        <Route path='/OrdenDesp' element={<OrdenDesp/>}/>
      </Routes>

    </BrowserRouter>
  
  );
}

export default App;
