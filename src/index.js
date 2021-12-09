import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  document.getElementById('root')
);

var usuario = [];

const guardar = () => {
    //Captura los datos de las cajas de texto
    let nom = document.getElementById("nom").value;
    let ape = document.getElementById("ape").value;
    let cedu = document.getElementById("cedu").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    //Crea un JSON
    /**
    {
        documento: 50,
        nombre: "Maria",
        telefono: 5145424,
        email: "r@gmail.co"
    }
     */
    let persona = {};
    persona.nombre = nom;
    persona.apellido = ape;
    persona.cedula = cedu;
    persona.telefono = tel;
    persona.correo = email;

    //Guarda la persona en Empleados
    usuario.push(persona);
    alert("Guardado!");
    limpiar();
}
/*
[
    {
        documento: 50,
        nombre: "Maria",
        telefono: 5145424,
        email: "r@gmail.co"
    },
    {
        documento: 80,
        nombre: "Pedro",
        telefono: 78645,
        email: "p@gmail.co"
    },
    {
        documento: 90,
        nombre: "Ana",
        telefono: 159,
        email: "ana@gmail.co"
    }
]
*/
const listar = () => {
    let listado = document.getElementById("listado");
    listado.innerHTML = "";
    for (const usu of usuario) {
        listado.innerHTML += `<tr>
                                <td>${usu.nombre}</td>
                                <td>${usu.apellido}</td>
                                <td>${usu.cedula}</td>
                                <td>${usu.telefono}</td>
                                <td>${usu.correo}</td>
                            </tr>`;
    }
}

const limpiar = () => {
    document.getElementById("nom").value= "";
    document.getElementById("ape").value= "";
    document.getElementById("cedu").value= "";
    document.getElementById("tel").value= "";
    document.getElementById("email").value= "";


}


