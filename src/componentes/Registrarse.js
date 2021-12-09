
const Registrarse=(nombre, apellido, usuario, celular, correo, password)=>{
    

    const user = { nombre:nombre , 
    apellido: apellido,
    usuario: usuario,
    celular: celular,
    correo: correo,
    password: password}
    //return    JSON.parse(user);
    let users= JSON.parse(localStorage.getItem("users"));
    if (users){
        users=[...users, user]
        localStorage.setItem("users", JSON.stringify(users));
    }else{
        localStorage.setItem("users", JSON.stringify([user]));
    }
    console.log(JSON.parse(localStorage.getItem("users"))[0])

    
    
} 
//let Usuarios= JSON.parse(usuarios);


export{Registrarse};

