const GeneralSetting = require('../models/generalSettingsModel')

exports.getAllGeneralSetting = async(req,res)=>{
    try {
        
        let settings = await GeneralSetting.findAll({
            attributes: { exclude: ['blocked_ips'] }
          })
        res.status(200).json({
            status:'success',
            data:settings
        })

    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}

exports.createGeneralSetting  = async(req,res)=>{
    try {
        let data = await GeneralSetting.create(req.body)
        res.status(200).json({
            status:'success',
            message:'General setting created successfully',
    
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}

exports.updateGeneralSettings = async(req,res)=>{
    try {
        console.log(req.params.id)
        await GeneralSetting.update(req.body,{where:{id:req.params.id}})
        res.status(200).json({
            status:'success',
            message:'Settings updated successfully'
        })

    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}

exports.deleteGeneralSettings = async(req,res)=>{
 try{   await GeneralSetting.destroy({where:{id:req.params.id}})
    res.status(200).json({
        status:'success',
        message:'Settings deleted successfully'
     })
    }catch (err) {
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}