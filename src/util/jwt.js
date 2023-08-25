const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../constants');

function generateToken(user) {
  const token = jwt.sign({ userId: user.userid }, jwtSecret, { expiresIn: '1h' });
  return token;
}

module.exports = {
  generateToken,
};