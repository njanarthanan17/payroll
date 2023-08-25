// app/services/employeeService.js
const UserLogin = require('../models/userlogin.models');
const passwordSchema = require('../util/passwordutil');




exports.addUserDetails = async (userData) => {
  try {
    // console.log("Service Password:" ,userData.user_password);
    // const hashedPassword = await hashPassword(userData.userpassword);
    // console.log(hashedPassword);
    const user = await UserLogin.create({
        user_name : userData.username,
        user_password:userData.userpassword,
        is_temp:userData.istemp,
        is_active:userData.isactive,
        created_by:userData.createdby,
        modified_by:userData.modifiedby,
        created_date:userData.createddate,
        modified_date:userData.modifieddate

    });
    return user;
  } catch (error) {
   // console.log(error);
    return error;
  }   
  
};

// Login 
exports.loginuser = async (username) => {
try{
  
const login = await UserLogin.findOne({

  where: { user_name : username}
}); 
console.log("login",login);
  return login;
}
catch(error){
  return error;
}
};

exports.updateUserPassword = async (userId, hashedPassword) => {

  return UserLogin.update({
     user_password:  hashedPassword
    }, { where: { user_id: userId }
   });
}


exports.validatePassword = async (newPassword) => {
  return passwordSchema.validate(newPassword);
}
