// const { findAll, findOne, create, update, delete:remove } = require('../models/users');
const User = require('../models/users');

const userObj = new User();

module.exports = {
    fetch: (req, res) => {
        userObj.findAll().then( (users) => res.status(200).json(users) )
    },

    retrieve: (req, res) => {
        userObj.findOne(req.params.id).then( (user) => {
            res.status(200).json(user)
        } ).catch( (error) => {
            res.status(400).json(error)
        } )
    },

    add: (req, res) => {
        userObj.create(req.body).then( (user) => {
            res.status(201).json(user)
        } ).catch( (error)=> {
            res.status(400).json(error)
        } )
    },

    modify: (req, res) => {
        userObj.update(req.params.id, req.body).then( (user) => {
            res.status(200).json(user)
        } ).catch ( (error) => {
            res.status(400).json(error)
        } )
    }, 

    eliminate: (req, res) => {
        userObj.delete(req.params.id).then( () => {
            res.status(204).send()
        } ).catch( () => {
            res.status(400).json(error)
        } )
    }
};