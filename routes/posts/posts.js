const express=require('express')
const { createPostCtrl, fetchPostsCtrl, fetchSinglePostCtrl, deletePostCtrl, updatePostCtrl } = require('../../controllers/posts/posts')
const postRoutes=express.Router()

postRoutes.post('/',createPostCtrl)

//fetch all
postRoutes.get('/',fetchPostsCtrl)

//single post
postRoutes.get('/:id',fetchSinglePostCtrl)

//delete post
postRoutes.delete('/:id',deletePostCtrl)

//updated post
postRoutes.put('/:id',updatePostCtrl)

module.exports=postRoutes