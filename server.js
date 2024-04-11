require("dotenv").config();
const express = require("express");
const session=require('express-session')
const MongoStore=require('connect-mongo')
const commentRoutes = require("./routes/comments/comment");
const postRoutes = require("./routes/posts/posts");
const methodOverride=require("method-override")
const userRoutes = require("./routes/users/users");
const globalHandler = require("./middlewares/globalHandler");

require("./config/dbConnect");

const app = express();

//middlewares
//-------
app.use(express.json())
app.use(methodOverride('_method'))

//pass form data
app.use(express.urlencoded({extended:true}))
//configure ejs
app.set('view engine',"ejs")
//serve static files
app.use(express.static(__dirname,+"public/"))
//session configuration
app.use(session({
    secret:process.env.SESSION_KEY,
    resave:false,
    saveUninitialized:true,
    store:new MongoStore({
        mongoUrl:process.env.MONGO_URI,
        ttl:24*60*60
    })
}))

app.use((req,res,next)=>{
if(req.session.userAuth){
    res.locals.userAuth=req.session.userAuth
}else{
    res.locals.userAuth=null
}
next()
})
//render home page
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
//users route
app.use("/api/v1/users", userRoutes);

//posts route
app.use("/api/v1/posts", postRoutes);

//comments
app.use("/api/v1/comments", commentRoutes);

//Error handler middlewares
app.use(globalHandler)
//listen server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Servver is running on PORT ${PORT}`));
