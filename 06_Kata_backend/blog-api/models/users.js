const db = require('../data/db');

module.exports = {
    findAll: () => {
    //va a traer todos los usuarios de la BD
    return db('users');
    },
    
    create: (data) => {
        // Va a crear un usuario
        return db('users').insert(data);
    },
    
    findOne : (id) => {
        // va a traer un usuario en particular
        return db('users'). where({id});
    },

    update: (id, data) => {
        // Va a modificar un usuario
        return db('users').where({id}).update(data);
    },

    delete: (id) => {
        // va a borrar un usuario
        return db('users').where({id}).del();
    }
};