// config/database.js
const { Sequelize } = require('sequelize');



const sequelize = new Sequelize('payrollhrms', 'postgres', 'sa@12345', {
  host: 'localhost',
  dialect: 'postgres', // Change this if using a different database
  port: 5432, // Default PostgreSQL port is 5432
  define: {
    timestamps: false
}
});

module.exports = sequelize;
