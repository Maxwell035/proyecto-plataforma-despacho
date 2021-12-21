import React from 'react'
import Cabecera from '../componentes/Cabecera';

import Menu from '../componentes/Menu';
import Pie from '../componentes/Pie';

import Listado from '../componentes/Listado';
import '../styles.css';


function Administrador() {
  return (


    <div className='container-fluid'>
        <Cabecera/>
        <Menu/>
        <Listado/>
        <Pie/>

    </div> 

  
  );
}

export default Administrador;