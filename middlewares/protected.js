const appErr = require("../utils/appErr")


const protected=(req,res,next)=>{
//check if user is logged in
if(req.session.userAuth){
    next()
}else{
next(appErr('not authorized log in again'))
}
}

module.exports=protected