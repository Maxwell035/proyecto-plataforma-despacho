import React from 'react'
import Cabecera from '../componentes/Cabecera';
import MenuUInterno from '../componentes/MenuUInterno'
import TituloAceptar from '../componentes/TituloAceptar';
import ListadoAceptar from '../componentes/ListadoAceptar';
import Pie from '../componentes/Pie';
import '../styles.css';


function AceptarOrdenes() {
  return (
      <div>
      <Cabecera/>
      <MenuUInterno/>
      <TituloAceptar/>
      <ListadoAceptar/>
      <Pie/>
      </div>

  )
}

export default AceptarOrdenes 