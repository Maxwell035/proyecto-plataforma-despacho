const Registrarse=(nombre, apellido, celular, correo, password)=>{
    const user = { nombre:nombre , 
    apellido: apellido,
    celular: celular,
    correo: correo,
    password: password}
    return    JSON.parse(user);
} 
const User= Registrarse()
console.log(User)
export{Registrarse};

