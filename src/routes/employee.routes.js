// app/routes/employeeRouter.js

module.exports = app => {


const express = require('express');
const employeeController = require('../controllers/employee.controller');
// const API_PREFIX =require('../../constants');


const emprouter = express.Router();

// API endpoint for adding employee details
emprouter.post('/', employeeController.addEmployee);


// app.use(API_PREFIX,router);

app.use('/employee', emprouter);

// module.exports = router;
}
