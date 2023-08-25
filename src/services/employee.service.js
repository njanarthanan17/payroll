// app/services/employeeService.js
const Employee = require('../models/employee.models');

exports.addEmployeeDetails = async (employeeData) => {
  try {

   
    const employee = await Employee.create({
      emp_code : employeeData.empcode,
      first_name:employeeData.firstname,
      last_name:employeeData.lastname,
      emp_role:employeeData.emprole,
      date_of_birth:employeeData.dateofbirth,
      blood_group:employeeData.bloodgroup,
      gender :employeeData.gender,
      marital_status:employeeData.maritalstatus,
      official_email:employeeData.officialemail,
      created_by:employeeData.createdby,
      modified_by:employeeData.modifiedby,
      created_date:employeeData.createddate,
      modified_date:employeeData.modifieddate

    });
    return employee;
  } catch (error) {
   // console.log(error);
    return error;
  }   
};
