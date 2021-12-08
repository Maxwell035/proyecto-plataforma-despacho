import React from 'react'
import Cabecera from '../componentes/Cabecera';
import MenuAdmin from '../componentes/MenuAdmin';
import Pie from '../componentes/Pie';
import Botoncrear from '../componentes/Botoncrear';
import Usuarios from '../componentes/Usuarios';
import Listado from '../componentes/Listado';
import '../styles.css';


function Administrador() {
  return (

    <div>
      <Usuarios/>
      <Listado/>
      <Botoncrear/>

    </div> 

  
  );
}

export default Administrador;