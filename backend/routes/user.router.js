const express = require('express')
const userController = require('../controllers/user.controller')

const route = express.Router();

route.post('/signup', userController.signup)


module.exports = route;