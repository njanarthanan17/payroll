module.exports = app =>{

const express = require('express');

const userController = require('../controllers/userlogin.controller');
// const API_PREFIX =require('../../constants');
const userrouter = express.Router();


userrouter.post('/', userController.addUser);

userrouter.post('/login', userController.login);

userrouter.put('/:userid',userController.updatePassword);

app.use('/user', userrouter);

}
