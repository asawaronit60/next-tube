const Page = require('../models/pagesModel')
const slugify  = require('../utils/slugify')
exports.getAllPages = async(req,res)=>{
    try {
       
        let pages = await Page.findAll();
        res.status(200).json({
            status:'success',
            data:pages
        })

    } catch (err) {
        res.status(400).json({
            stauts:'fail',
            message:err.message
        })
    }
}

exports.getPage = async(req,res)=>{
    try {
        let page = await Page.findByPk(req.params.id)
        res.status(200).json({
            status:'success',
            data:page
        })
    } catch (err) {
        res.status(400).json({
            stauts:'fail',
            message:err.message
        })
    }
}

exports.createPage = async(req,res)=>{
    try {
        let {title , detail,status} = req.body
        let slug = slugify(title)
       
        let page = await Page.create({
            title:title,
            slug:slug,
            details:detail,
            status
        })

        res.status(200).json({
            status:'success',
            message:'Page created successfully',
            data :page
        })

    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }

}

exports.deletePage = async(req,res)=>{
    try {
        await Page.destroy({where:{id:req.params.id}})
        
        res.status(200).json({
            status:'success',
            message:'Page Deleted successfully'
        })
    } catch (err) {
        res.status(400).json({
            stauts:'fail',
            message:err.message
        })
    }
}

exports.updatePage = async(req,res)=>{
    try {
        let update = req.body
        if(req.body.title)
            update.slug = slugify(req.body.title)

       let page =  await Page.update(update,{where:{id:req.params.id}})
        
        res.status(200).json({
            status:'success',
            message:'Page Updated successfully',
            data:page
        })
    } catch (err) {
        res.status(400).json({
            stauts:'fail',
            message:err.message
        })
    }
}