const getUserById = (id, callback) => {
    const user = {
        name: "Waldo", 
        id: id 
    };
    if (user.id === 1){
        return callback(`el usuario es: ${user.name}`)
    }
    return callback("No hay usuario con ese numero de empleado"); 
}

const saludo = (data) => {
    console.log(data);
}
getUserById(1, saludo);