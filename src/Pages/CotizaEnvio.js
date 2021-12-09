import React from 'react'
import Cabecera from '../componentes/Cabecera';
import Menu from '../componentes/Menu';
import Pie from '../componentes/Pie';
import InfoCotizar from '../componentes/InfoCotizar';
import '../styles.css';

function CotizaEnvio() {
    return (
  
      <div>
        <Cabecera/>
        <Menu/>
        <InfoCotizar/>
        <Pie/>
  
      </div>
    )
} 

export default CotizaEnvio