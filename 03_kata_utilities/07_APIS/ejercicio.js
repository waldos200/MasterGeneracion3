const request = require('request');

// PRIMER EJERCICIO
const libro = (nombreLibro) => {
    request.get(`http://openlibrary.org/search.json?q=${nombreLibro}`, (error, response, body) => {
        if (response.statusCode === 200) {
            const data = JSON.parse(body);
            console.log(`El nombre del autor es ${data.docs[0].author_name[0]}`);
        } else {
            console.error(`Ocurrio un error ${error}`)
        }
    });
}
libro("Microfossils");

// SEGUNDO EJERCICIO
const autor = (nombreAutor) => {
    request.get(`http://openlibrary.org/search.json?author=${nombreAutor}`, (error, response, body) =>{
        if (response.statusCode === 200) {
            const data = JSON.parse(body);
            console.log(`Estos son los libros del autor ${data.publisher}`);
        } else {
            console.log(`Ocurrio un error ${error}`);
        }
    })
}
autor("Isaac");

// TERCER EERCICIO
const genero = (banda) => {
    request.get(`http://www.theaudiodb.com/api/v1/json/1/search.php?s=${banda}`, (error, response, body) => {
        if (response.statusCode === 200) {
            const data = JSON.parse(body);
            console.log(`El genero de la banda es ${data.artists[0].strGenre}`);
        } else {
            console.log(`Error ${error}`);
        }
    })
}
genero("muse");

// CUARTO EJERCICIO
