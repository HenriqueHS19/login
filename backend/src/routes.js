const express = require('express');
const LoginController = require('./controllers/LoginController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

// Login
routes.post('/login', LoginController.login);
routes.post('/login/register', LoginController.create);
routes.put('/login/recovery', LoginController.update);

// User
routes.post('/user', UserController.create);
routes.get('/user', UserController.read);
routes.get('/user/:idUser', UserController.readOne);


module.exports = routes;