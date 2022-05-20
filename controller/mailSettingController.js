const MailSetting = require('../models/mailSetting')

exports.getAllMail = async (req, res) => {
    try {
        let mailSetting = await MailSetting.findAll();
        res.status(200).json({
            status:'success',
            data:mailSetting
        })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}

exports.createMailSetting = async(req,res)=>{
    try {
        let mailSetting = await MailSetting.create(req.body)
        res.status(200).json({
            status:'success',
            message:'mail setting created successfully',
            data:mailSetting
        })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}

exports.updateMailSetting = async(req,res)=>{
    try {
        await MailSetting.update(req.body,{where:{id:req.params.id}})
        res.status(200).json({
            status:'success',
            message:'mail updated successfully'
        })  
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}