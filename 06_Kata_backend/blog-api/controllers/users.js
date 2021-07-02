// const { findAll, findOne, create, update, delete:remove } = require('../models/users');
const User = require('../models/users');

module.exports = {
    fetch: (req, res) => {
        const userObj = new User();
        userObj.findAll().then( (users) => res.status(200).json(users) )
    },

    retrieve: (req, res) => {
        const userObj = new User();
        userObj.findOne(req.params.id).then( (result) => {
            res.status(200).json(result)
        } ).catch( (error) => {
            res.status(400).json(error)
        } )
    },

    add: (req, res) => {
        const userObj = new User();
        userObj.create(req.body).then( (result) => {
            res.status(201).json(result)
        } ).catch( (error)=> {
            res.status(400).json(error)
        } )
    },

    modify: (req, res) => {
        const userObj = new User();
        userObj.update(req.params.id, req.body).then( (result) => {
            res.status(200).json(result)
        } ).catch ( (error) => {
            res.status(400).json(error)
        } )
    }, 

    eliminate: (req, res) => {
        const userObj = new User();
        userObj.delete(req.params.id).then( () => {
            res.status(204).send()
        } ).catch( () => {
            res.status(400).json(error)
        } )
    }
};