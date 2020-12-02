const request = require("request");
console.log("Empezando a hacer peticiones");

request ('https://www.google.com', (error, response, body) => {
    console.log(response.statusCode);
    console.log("que es body");
    // console.log(body);
    if (response.statusCode === 200) {
        console.log("que es body");
        // console.log(body);
    } else {
        console.log(error);
    }
})

console.log("Terminando la peticion");