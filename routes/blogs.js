const blogcontroller = require('../controller/blogController')
const authController = require('../controller/authController')
const express = require('express')
const router = express.Router()


router.get('/getAllBlogs',blogcontroller.getAllBlogs)
router.get('/getBlog/:id',blogcontroller.getBlog)
router.post('/createBlog',blogcontroller.createBlog)
router.delete('/deleteBlog/:id',blogcontroller.deleteBlog)
router.patch('/updateblog/:id',blogcontroller.updateBlog)

module.exports = router
