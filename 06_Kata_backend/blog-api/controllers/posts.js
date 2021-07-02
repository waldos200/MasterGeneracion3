// const { findAll, findOne, create, update, delete:remove } = require('../models/posts');
const Post = require('../models/posts');

const post = new Post();

module.exports = {
    fetch: (req, res) => {
        post.findAll().then( (posts) => res.status(200).json(posts) )
    },

    retrieve: (req, res) => {
        post.findOne(req.params.id).then( (post) => {
            res.status(200).json(post)
        } ).catch( (error) => {
            res.status(400).json(error)
        } )
    },

    add: (req, res) => {
        post.create(req.body).then( (post) => {
            res.status(201).json(post)
        } ).catch( (error)=> {
            res.status(400).json(error)
        } )
    },

    modify: (req, res) => {
        post.update(req.params.id, req.body).then( (post) => {
            res.status(200).json(post)
        } ).catch ( (error) => {
            res.status(400).json(error)
        } )
    }, 

    eliminate: (req, res) => {
        post.delete(req.params.id).then( () => {
            res.status(204).send()
        } ).catch( () => {
            res.status(400).json(error)
        } )
    }
};