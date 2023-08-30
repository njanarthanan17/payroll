const userService = require("../services/userlogin.services");
const generatepassword = require("generate-password");
const { comparePasswords } = require('../util/passwordutil');
const bcrypt = require("bcrypt");
const jwtUtils = require("../util/jwt")

const saltRounds = 10;

var generator = require("generate-password");


exports.addUser = async (req, res) => {
  try {
    var password = generator.generate({
      length:8,
      numbers:2,
      symbols:0,
    });
    console.log("Plain Password", password);

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userData = req.body;
    console.log("Hashed Password IN", hashedPassword);
    userData.userpassword = hashedPassword;

    userData.isactive ="y";
    userData.istemp = "y";

    // Validation checks for required fields
    if (userData.username === "" || !userData.username) {

      res.status(400) .json({message: "username is required" });

    } else {


      const user = await userService.addUserDetails(userData);
  
      res.status(201).json({ message: "add user success", user });
    }

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.login = async (req, res) => {
  const { username, userpassword } = req.body;
    // console.log( username, userpassword );
   try {
    const user = await userService.loginuser(username);
    // console.log("UserLoginController", user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(userpassword, user.user_password);

      //  console.log("password match ",isPasswordValid);

    if (!isPasswordValid) {
        res.status(401).json({ message: 'Invalid Password' });
        return;
    }

    // const responseUser = {
    //   username: user.user_name,
    //   istemp: user.is_temp,   
    // };

    const token = jwtUtils.generateToken(user);
    res.status(200).json({ token : token });

    //res.status(201).json({ message: "Login successful",user:responseUser});
    

  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};



exports.updatePassword = async (req, res) => {
  const userDetails = req.body;
  const userId = req.params.userid;
  const { newPassword } = req.body;
  try {
    console.log(userDetails.newPassword);

    const isValidPassword = await userService.validatePassword(userDetails.newPassword);
    
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid password. Please follow the password rules.' });
    }
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        console.log(hashedPassword);
    await userService.updateUserPassword(userId, hashedPassword);
     res.status(200).json({ message: 'Password updated successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user.' });
  }
}



exports.getUser = async (req, res) => {
  try {
    const userid = req.params.userid;
    const user = await userService.getUserById(userid);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

