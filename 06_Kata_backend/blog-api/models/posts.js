// const db = require('../data/db');
const Model = require('./Model');

class Post extends Model{
    constructor(){
        super('posts')
    }

    populateUser(){
        return this.db.innerJoin('users', 'posts.user_id', '=', 'users.id');
    }
}

module.exports = Post;

/* module.exports = {
    findAll: () => {
    return db('posts');
    },
    
    create: (data) => {
        return db('posts').insert(data,['id', 'title', 'created_at']);
    },
    
    findOne : (id) => {
        return db('posts'). where({id});
    },

    update: (id, data) => {
        return db('posts').where({id}).update(data, ['id', 'title', 'body', 'user_id', 'category']);
    },

    delete: (id) => {
        return db('posts').where({id}).del();
    }
}; */