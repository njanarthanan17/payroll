const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/dbconfig');

const Project = sequelize.define('projectmasters', {
  project_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  project_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  project_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  client_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  project_startdate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  project_enddate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  project_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  project_activateddate: {
    type: DataTypes.DATE,
  },
  project_deactivateddate: {
    type: DataTypes.DATE,
    allowNull:true,
  },
  activated_by: {
    type: DataTypes.INTEGER,
  },
  deactivated_by: {
    type: DataTypes.INTEGER,
  },
  comments: {
    type: DataTypes.STRING,
  },
  created_by: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modified_by: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  modified_date: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Sequelize.NOW,
  },
  
}, {
  schema: 'timesheet', // This sets the schema for the table
},{
  tableName: "projectmasters",
});

module.exports = Project;
