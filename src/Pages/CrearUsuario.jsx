import React from 'react'
import Cabecera from '../componentes/Cabecera';
import Menu from '../componentes/Menu';
import Pie from '../componentes/Pie';
import Formulario1 from '../componentes/Formulario1';
import TituloCrear from '../componentes/TituloCrear';
import '../styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';



function CrearUsuario() {
  return (

    <div>
      <Cabecera/>
      <Menu/>
      <TituloCrear/>
      <Formulario1/>
      <Pie/>
     

    </div> 

  
  );
}

export default CrearUsuario