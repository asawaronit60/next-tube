const Faq = require('../models/faqModel')

exports.getAllFaqs = async(req,res)=>{
    try {
        let faqs  =await Faq.findAll()
        res.status(200).json({
            status:'success',
            data:faqs
        })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}

exports.getFaq = async(req,res)=>{
    try {
        let faq = await Faq.findByPk(req.params.id)
        res.status(200).json({
            status:'success',
            data:faq
        })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}

exports.createFaqs = async(req,res)=>{
try {
    let data = await Faq.create(req.body)
    res.status(200).json({
        status:'success',
        message:'Faq created successfully',
        data
    })
} catch (err) {
    res.status(400).json({
        status:'fail',
        message:err.message
    })
}
}

exports.deleteFaq = async(req,res)=>{
    try {
        await Faq.destroy({where:{id:req.params.id}})
        res.status(200).json({
            status:'success',
            message:'Faq deleted successfully'
        })
    } catch (err) {
        
    }
}

exports.updatedeFaq = async(req,res)=>{
    try {
        let rows = await Faq.update(req.body,{where:{id:req.params.id}})
        res.status(200).json({
            status:'success',
            message:'faq updated successfully',
            rowsUpdated:rows
        })

    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}