const Blog = require('../models/blogModel')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'assets/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
      cb(null,  file.fieldname + '-' + uniqueSuffix + "." + file.mimetype.split('/')[1])
    }
})

const upload = multer({ storage: storage ,dest: '../assets/images/'}).single('image')

exports.getAllBlogs = async (req, res) => {
    try {
        let blogs = await Blog.findAll()
        res.status(200).json({
            status: 'success',
            data: blogs
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.getBlog = async (req, res) => {
    try {
        let blog = await Blog.findByPk(req.params.id)
        res.status(200).json({
            status: 'success',
            data: blog
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.createBlog = async (req, res) => {
    try {

        upload(req,res,async(err)=>{
        if(err)
        return res.status(400).json({
            status:'fail',
            message:'Something went wrong while uploading image!'
        })
        console.log(req.body)
        req.body.image = `../assets/images/${req.file.filename}`
     
        let blog = await Blog.create(req.body)
        res.status(200).json({
            status: 'success',
            data: blog
        })
    })

    } catch (err) {
        res.status(400).json({
            stauts: 'fail',
            message: err.message
        })
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        await Blog.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json({
            status: 'success',
            message: 'blog deleted successfully'
        })
    } catch (err) {
        res.status(400).json({
            stauts: 'fail',
            message: err.message
        })
    }
}

exports.updateBlog = async(req,res)=>{
    try {
        let updateBlogs = await Blog.update(req.body,{where:{id:req.params.id}})
        
        res.status(200).json({
          status:'success',
          message:'Blog updated successfully',
          rowsUpdated:updateBlogs,
        })
    } catch (err) {
        res.status(400).json({
            stauts: 'fail',
            message: err.message
        })
    }
}