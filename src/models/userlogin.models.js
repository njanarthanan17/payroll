// modules/user.js

const { Sequelize } = require('sequelize');
const sequelize = require('../util/dbconfig');
const bcrypt = require('bcrypt');

const UserLogin = sequelize.define('user_logins', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user_password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  is_temp: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  is_active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  created_by: {
    type: Sequelize.STRING,
  },
  modified_by: {
    type: Sequelize.STRING,
  },
  created_date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  modified_date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
}).schema('hrms');

module.exports = UserLogin;
