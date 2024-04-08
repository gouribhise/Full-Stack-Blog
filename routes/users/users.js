const express=require('express')
const userRoutes=express.Router()
 const {registerCtrl, loginCtrl, singleUserCtrl, userDetailsCtrl, profileCtrl, uploadProfilePhotoCtrl, uploadCoverImageCtrl, updatePasswordCtrl, updateUserCtrl, logoutCtrl}=require('../../controllers/users/users')

//register 
userRoutes.post('/register',registerCtrl)

//login
userRoutes.post('/login',loginCtrl)

//single user
userRoutes.get('/:id',userDetailsCtrl)

//user profile
userRoutes.get('/profile/:id',profileCtrl)

//update profile photo
userRoutes.put('/profile-photo-upload/:id',uploadProfilePhotoCtrl)

//cover photo
userRoutes.put('/cover-photo-upload/:id',uploadCoverImageCtrl)

//update user password
userRoutes.put('/update-password/:id',updatePasswordCtrl)

//update user
userRoutes.put('/update/:id',updateUserCtrl)

//logout user
userRoutes.get('/logout',logoutCtrl)



module.exports=userRoutes