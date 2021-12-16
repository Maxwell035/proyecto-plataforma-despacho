import React from 'react'
import Cabecera from '../componentes/Cabecera';
import Pie from '../componentes/Pie';
import ListIntegrantes from '../componentes/ListIntegrantes';
import '../styles.css';

function Integrantes() {
    return (
        <div>
        <Cabecera/>
        <ListIntegrantes/>
        <Pie/>
        </div>
    );

}

export default Integrantes