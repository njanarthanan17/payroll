const { Sequelize } = require('sequelize');

const sequelize = require('../util/dbconfig');

 

const Employee = sequelize.define('employees', {

 

 emp_id: {

  type: Sequelize.INTEGER,

  allowNull: true,
  autoIncrement: true,
primaryKey: true,

 },

  emp_code: {

    type: Sequelize.STRING,
    require:[true,'firstname is reqired field!'],


    allowNull: false,

  },

  first_name: {

    type: Sequelize.STRING,

    require:[true,'firstname is reqired field!'],

    allowNull: false,

  },

  last_name: {

    type: Sequelize.STRING,

    allowNull: false,

  },

  emp_role: {

    type: Sequelize.STRING,

    allowNull: false,

  },

  date_of_birth: {

    type: Sequelize.DATEONLY,

    allowNull: false,

  },

  blood_group: {

    type: Sequelize.STRING,

  },

  gender: {

    type: Sequelize.STRING,

    allowNull: false,

  },

  marital_status: {

    type: Sequelize.STRING,

    allowNull: false,

  },

  official_email: {

    type: Sequelize.STRING,

    allowNull: false,

    unique: true,

    validate: {

      isEmail: true,

    },

  },

  created_by: {

    type: Sequelize.STRING,

    allowNull: false,

  },

  modified_by: {

    type: Sequelize.STRING,

    allowNull: false,

  },

  created_date: {

    type: Sequelize.DATE,

    allowNull: false,

    defaultValue: Sequelize.NOW,

  },

  modified_date: {

    type: Sequelize.DATE,

    allowNull: false,

    defaultValue: Sequelize.NOW,

  },

}).schema('hrms');

 

module.exports = Employee;