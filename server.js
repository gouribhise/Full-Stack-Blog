require("dotenv").config();
const express = require("express");
const session=require('express-session')
const commentRoutes = require("./routes/comments/comment");
const postRoutes = require("./routes/posts/posts");
const userRoutes = require("./routes/users/users");
const globalHandler = require("./middlewares/globalHandler");

require("./config/dbConnect");

const app = express();

//middlewares
//-------
app.use(express.json())

//session configuration
app.use(session({
    secret:process.env.SESSION_KEY,
    resave:false,
    saveUninitialized:true
}))

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
