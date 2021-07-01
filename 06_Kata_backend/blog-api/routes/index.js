const express = require('express');
const router = express.Router();
const { fetch, retrieve, add, modify, eliminate } = require('../controllers/users');

// user routes

router.get('/users', fetch);
router.get('/users/:id', retrieve);
router.post('/users', add);
router.put('/users/:id', modify);
router.delete('/users/:id', eliminate);

module.exports = router;