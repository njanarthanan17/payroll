const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../jwtsecretkey');

function isAuth(req, res, next) {
    const token =  req.body.token || req.query.token || req.header('Authorization').replace('Bearer ', '');
      console.log("token :",token);
      if (!token) {
        return res.status(403).send("A token is required for authentication");
      }
    try {
      const decoded = jwt.verify(token, jwtSecret);
      req.userId = decoded.userId;
      next();
    } catch (error) {
      res.status(401).json({ message : 'Unauthorized.' });
    }
  }

  module.exports ={
    isAuth
  }