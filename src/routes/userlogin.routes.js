const books = require('../../book')
module.exports = app =>{

const express = require('express');

const userController = require('../controllers/userlogin.controller');


// const API_PREFIX =require('../../constants');
const userrouter = express.Router();


userrouter.post('/', userController.addUser);

userrouter.post('/login', userController.login);

userrouter.put('/:userid',userController.updatePassword);

// userrouter.get('/:userid',authMiddleware.isAuth, userController.getUser);

// userrouter.get('/books',authMiddleware.isAuth , (req, res) => {
    
//     res.json(books);
// });
app.use('/user', userrouter);

}
