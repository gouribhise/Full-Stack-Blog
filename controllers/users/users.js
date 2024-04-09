const bcrypt=require('bcryptjs')

const User=require('../../models/user/User');
const appErr = require('../../utils/appErr');

//register
const registerCtrl = async (req, res,next) => {
  const{fullname,email,password}=req.body
  //check field is empty
  if(!fullname||!email||!password){
    return next(appErr('All fields are required'))
  }
    try {
      //if user exists
      const userFound=await User.findOne({email})
         if(userFound){
          return next(appErr('User already exist'))
          }
         //hash password
const salt=await bcrypt.genSalt(10)
const passwordHashed=await bcrypt.hash(password,salt)
         const user=await User.create({
          fullname,email,password:passwordHashed
         })
      res.json({
        status: "success",
        data:user,
      });
    } catch (error) {
      res.json(error);
    }
  };
  
  //login
  const loginCtrl = async (req, res,next) => {
    console.log(req.session)
    const {email,password}=req.body
    if(!email||!password){
      return next(appErr('Email and password fields are required'))

    }

    try {
      const userFound=await User.findOne({email})
      if(!userFound){
return next(appErr('Invalid login credentials'))
      }
      //verify password
      const isPasswordValid=await bcrypt.compare(password,userFound.password)
      if(!isPasswordValid){
        return next(appErr('Invalid login credentials'))
      }

      //save the user into session
       req.session.userAuth=userFound._id
       console.log(req.session)
      res.json({
        status: "success",
        data:userFound
      });
    } catch (error) {
      res.json(error);
    }
  };
  
  //details
  const userDetailsCtrl = async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User Details",
      });
    } catch (error) {
      res.json(error);
    }
  };
  //profile
  const profileCtrl = async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User profile",
      });
    } catch (error) {
      res.json(error);
    }
  };
  
  //upload profile photo
  const uploadProfilePhotoCtrl = async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User profile image upload",
      });
    } catch (error) {
      res.json(error);
    }
  };
  
  //upload cover image
  
  const uploadCoverImgCtrl = async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User cover image upload",
      });
    } catch (error) {
      res.json(error);
    }
  };
  
  //update password
  const updatePasswordCtrl = async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User password update",
      });
    } catch (error) {
      res.json(error);
    }
  };
  
  //update user
  const updateUserCtrl = async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User  update",
      });
    } catch (error) {
      res.json(error);
    }
  };
  
  //logout
  const logoutCtrl = async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "User logout",
      });
    } catch (error) {
      res.json(error);
    }
  };
  
  module.exports = {
    registerCtrl,
    loginCtrl,
    userDetailsCtrl,
    profileCtrl,
    uploadProfilePhotoCtrl,
    uploadCoverImgCtrl,
    updatePasswordCtrl,
    updateUserCtrl,
    logoutCtrl,
  };
  