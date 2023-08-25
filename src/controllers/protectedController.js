// controllers/protectedController.js
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../');
const userService = require('../services/userlogin.services');

async function protectedRoute(req, res) {
  const token = req.header('Authorization').replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, jwtSecret);
    const userId = decoded.userId;

    // Fetch user information using the userId
    const user = await userService.getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Now you can use the 'user' object for further actions
    res.json({ message: 'Protected route accessed.', user });
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized.' });
  }
}

module.exports = {
  protectedRoute,
};
