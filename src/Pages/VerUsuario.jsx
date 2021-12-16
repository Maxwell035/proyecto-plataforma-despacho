import React from 'react'
import Cabecera from '../componentes/Cabecera';
import Menu from '../componentes/Menu';
import Pie from '../componentes/Pie';
import Infousuario from '../componentes/Infousuario';
import '../styles.css'


function VerUsuario() {
  return (

    <div>
      <Cabecera/>
      <Menu/>
      <Infousuario/>
      <Pie/>

    </div> 

  
  );
}

export default VerUsuario;