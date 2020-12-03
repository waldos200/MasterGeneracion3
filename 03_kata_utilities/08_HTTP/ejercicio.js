const request = require('request');

const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com"

const getAuthors = (id) => {
    request.get(`${URL_BASE}/api/v1/authors/${id}`, (err, res, body) => {
        if (res.statusCode === 200) {
            const data = JSON.parse(body);
            console.log(data);
        } else {
            console.log(err);
        }
    });
}

// getAuthors(13479);


// GET
const getAllAuthors = () => {
    return new Promise((resolve, reject) => {
        request.get(`${URL_BASE}/api/v1/authors/`, (err, res, body) => {
            if (res.statusCode === 200) {
                const data = JSON.parse(body);
                return resolve(data)
            } else {
                return reject(err)
            }
        });
    })
}

// getAllAuthors()
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

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
    return new Promise((resolve, reject) => {
        request.post(URL_POST, {form: jsonSend}, (err, res, body) => {
            if(res.statusCode === 201){
                const newAuthor = JSON.parse(body);
                return resolve(newAuthor)
            } else {
                return reject(err)
            }
        })
    })
}

// createAuthor("Samuel", "Mendoza", "USA", "Ya esta noche", "M", 20, true)
//     .then((autor) => console.log(autor))
//     .catch((error) => console.log(error));
