const express=require('express')
const { createCommentCtrl, commentDetailsCtrl, deleteCommentCtrl, updateCommentCtrl } = require('../../controllers/comments/comments')
const commentRoutes=express.Router()
commentRoutes.post('/',createCommentCtrl)

 

//single comment
commentRoutes.get('/:id',commentDetailsCtrl)

//delete comment
commentRoutes.delete('/:id',deleteCommentCtrl)

//updated comment
commentRoutes.put('/:id',updateCommentCtrl)

module.exports=commentRoutes