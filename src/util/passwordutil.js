const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema
  .is()
  .min(8)
  .is()
  .max(50)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .symbols()
  .is()
  .not()
  .oneOf(['Passw0rd', 'Password123']); // Example of common weak passwords

module.exports = passwordSchema;