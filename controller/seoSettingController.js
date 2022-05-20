
const seoSetting = require('../models/seoSettingModel')

exports.getAllSeoSetting = async(req,res)=>{
    try {
        let data = await seoSetting.findAll();
        res.status(200).json({
            status:'success',
            data
        })
    } catch (err) {
        res.status(400).json({
            stauts:'fail',
            message:err.message
        })
    }
}

exports.createSetting = async(req,res)=>{
    try {
      let newseoSetting = await seoSetting.create(req.body)
      res.status(200).json({
        status:'success',
        data:newseoSetting
    })
    } catch (err) {
        res.status(400).json({
            stauts:'fail',
            message:err.message
        })
    }
}

exports.updatedeSetting = async(req,res)=>{
    try {
        let rows = await seoSetting.update(req.body,{where:{id:req.params.id}})
        res.status(200).json({
            status:'success',
            message:'setting updated successfully',
            rowsUpdated:rows
        })

    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}