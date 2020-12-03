const request = require('request');

const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com"

// end-points

// -> /api/v1/authors
const getAllAuthors = () => {
    request.get(`${URL_BASE}/api/v1/authors/`, (err, res, body) =>{
        if (res.statusCode === 200) {
            const data = JSON.parse(body);
            console.log(data);
        }else{
            console.log(err);
        }
    });
}

getAllAuthors();

// ------------> CRUD <------------
// CREATE
// READ
// UPDATE
// DELETE

