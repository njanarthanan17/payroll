// app/routes/employeeRouter.js

module.exports = app => {


const express = require('express');
const employeeController = require('../controllers/employee.controller');
const authMiddleware = require('../middleware/auth');
// const API_PREFIX =require('../../constants');


const emprouter = express.Router();

// API endpoint for adding employee details
emprouter.post('/', employeeController.addEmployee);

emprouter.get('/:empid',authMiddleware.isAuth, employeeController.getEmployee);
// app.use(API_PREFIX,router);

app.use('/employee', emprouter);

// module.exports = router;
}
