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

