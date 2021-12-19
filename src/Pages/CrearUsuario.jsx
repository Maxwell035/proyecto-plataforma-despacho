import React from 'react'
import Cabecera from '../componentes/Cabecera';
import Menu from '../componentes/Menu';
import Pie from '../componentes/Pie';
import Formulario1 from '../componentes/Formulario1';
import TituloCrear from '../componentes/TituloCrear';
import '../styles.css';




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