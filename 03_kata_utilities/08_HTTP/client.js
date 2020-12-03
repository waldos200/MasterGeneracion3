const request = require('request');

const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com"

// end-points

// -> /api/v1/authors
// READ
const getAllAuthors = () => {
    request.get(`${URL_BASE}/api/v1/authors/`, (err, res, body) => {
        if (res.statusCode === 200) {
            const data = JSON.parse(body);
            console.log(data);
        } else {
            console.log(err);
        }
    });
}

// getAllAuthors();

// ------------> CRUD <------------
// CREATE
// READ
// UPDATE
// DELETE

// CREATE
const createAuthor = (name, last_name, nacionalidad, biography, gender, age, isAlive) => {
    const URL_POST = `${URL_BASE}/api/v1/authors/`;
    const jsonSend = {
        "name": name,
        "last_name": last_name,
        "nacionalidad": nacionalidad,
        "biography": biography,
        "gender": gender,
        "age": age,
        "is_alive": isAlive
    }

    request.post(URL_POST, {form: jsonSend}, (err, res, body) => {
        if(res.statusCode === 201){
            const newAuthor = JSON.parse(body);
            console.log(newAuthor);
            return newAuthor
        } else {
            console.log(err);
        }
    })
}

// createAuthor("Juan", "Guarnizo", "MX", "Streamer", "M", 22, true)
// 13479

// UPDATE
const updateAuthor = (name, last_name, nacionalidad, biography, gender, age, isAlive, id) => {
    const URL_PUT = `${URL_BASE}/api/v1/authors/${id}/`;
    const jsonSend = {
        "name": name,
        "last_name": last_name,
        "nacionalidad": nacionalidad,
        "biography": biography,
        "gender": gender,
        "age": age,
        "is_alive": isAlive
    }

    request.put(URL_PUT, {form : jsonSend}, (err, res, body) => {
        if(res.statusCode === 200){
            const upAuthor = JSON.parse(body);
            console.log(upAuthor);
        } else {
            console.log(err);
        }
    })
}

// updateAuthor("Angel", "Tengo hambre, ya comi", "ES", "Soy tu padre", "F", 10, false, 12854);

// DELETE
const deleteAuthor = (id) => {
    const URL_DELETE = `${URL_BASE}/api/v1/authors/${id}/`;

    request.delete(URL_DELETE, (err, res, body) => {
        if(res.statusCode === 204){
            console.log("Se elimino el usuario");
        } else {
            console.log(err, "No se pudo borrar");
        }
    })
}
// deleteAuthor(12898);