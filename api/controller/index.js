const express = require('express');
const bodyParser = require('body-parser'); 
const routes = express.Router(); 

// import all models objects

const{users} = require("../models")

// ===== User's Routes =====
routes.get('/users', (req, res) => {
    users.fetchUser(req, res)
})

routes.get('/user/:id', (req, res) => {
    users.fetchUser(req, res)
})

routes.post('/login', bodyParser.json(), (req, res) => {
    users.login(req, res)
})

routes.post('/register', bodyParser.json(), (req, res) => {
    users.register(req, res)
})

routes.put('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})

routes.patch('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})

routes.delete('/user/:id',  (req, res) => {
    users.deleteUser(req, res)
})


module.exports = {express, routes}