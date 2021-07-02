// const { findAll, findOne, create, update, delete:remove } = require('../models/posts');
const Post = require('../models/posts');

const postObj = new Post();

module.exports = {
    fetch: (req, res) => {
        postObj.findAll().then( (posts) => res.status(200).json(posts) )
    },

    retrieve: (req, res) => {
        postObj.findOne(req.params.id).then( (post) => {
            res.status(200).json(post)
        } ).catch( (error) => {
            res.status(400).json(error)
        } )
    },

    add: (req, res) => {
        postObj.create(req.body).then( (post) => {
            res.status(201).json(post)
        } ).catch( (error)=> {
            res.status(400).json(error)
        } )
    },

    modify: (req, res) => {
        postObj.update(req.params.id, req.body).then( (post) => {
            res.status(200).json(post)
        } ).catch ( (error) => {
            res.status(400).json(error)
        } )
    }, 

    eliminate: (req, res) => {
        postObj.delete(req.params.id).then( () => {
            res.status(204).send()
        } ).catch( () => {
            res.status(400).json(error)
        } )
    }
};