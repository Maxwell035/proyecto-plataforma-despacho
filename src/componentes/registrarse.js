const Registrarse=(nombre, apellido, celular, correo, password)=>{
    const user = { nombre:nombre , 
    apellido: apellido,
    celular: celular,
    correo: correo,
    password: password}
    return    JSON.parse("Success", 200 );
} 
export{Registrarse};

console.log(JSON.parse())