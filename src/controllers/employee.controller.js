// app/controllers/employeeController.js
const employeeService = require('../services/employee.service');


exports.addEmployee = async (req, res) => {
     try {
      const employeeData= req.body;


      if (employeeData.empcode === "" || employeeData.firstname === "" || employeeData.lastname === "" || employeeData.officialemail === "") {
        res.status(400).json({ error: 'empCode, firstName, lastName, and officialEmail are required' });
      }

      const employee = await employeeService.addEmployeeDetails(employeeData);
  
      res.status(201).json({message : 'add amployee success',employee});
     
    } catch (error) {
      //console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


