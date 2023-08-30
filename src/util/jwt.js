const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../jwtsecretkey');
// const { jwtSecret } = require('../../constants');

function generateToken(user) {
  const token = jwt.sign({ user_id: user.userid }, jwtSecret );
  return token;
}

module.exports = {
  generateToken
};
//{ expiresIn: '1h' }



