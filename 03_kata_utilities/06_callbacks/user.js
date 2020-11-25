// Declaracion de la uncion que me va a traer el usuario
// Tienes dos parametros,
// id del usuario que es un numero
// la funcion que va a llamar que es una funcion 
const getUserById = (id, callback) => {
    // Declaramos el objeto user
    const user = {
        name: "Waldo", // La llave es name y el valor es Waldo
        id: id // La llave es id y el valor esel id
    };
    console.log("funcion", callback);
    callback(user); // Ejecutamos la funcion 
}

// Mando a llamar la uncion,
// Necesito enviarle en el orden que lo esta solicitando la funcion 
getUserById(
    1, // id
    // Funcion anonima que estoy creando, pero no se eecuta
    (usuario) => {
        console.log(usuario);
    }
);