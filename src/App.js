import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListarOrdenesDesp from './pages/ListarOrdenesDesp';
import OrdenDesp from './pages/OrdenDesp';
import './styles.css';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/listarODD' element={<ListarOrdenesDesp/>}/>
        <Route path='/OrdenDesp' element={<OrdenDesp/>}/>
       
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
