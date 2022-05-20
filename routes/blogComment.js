const express = require('express')
const router = express.Router()
const blogCommentsController = require('../controller/blogCommentsController')
const authController = require('../controller/authController')

router.post('/createComment/:blogId',authController.protect, blogCommentsController.createComment)
router.get('/getAllComments/:blogId',blogCommentsController.getAllComments)
router.patch('/updateBlogComment/:blogCommentId',authController.protect,blogCommentsController.updateComment)
router.delete('/deleteBlogComment/:blogCommentId',authController.protect,blogCommentsController.deleteComment)


module.exports = router