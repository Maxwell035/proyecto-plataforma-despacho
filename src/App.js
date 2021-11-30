import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListarOrdenesDesp from './pages/ListarOrdenesDesp';
import './styles.css';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/listarODD' element={<ListarOrdenesDesp/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
