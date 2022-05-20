const Notification = require('../models/notification')

exports.getAllNotification = async(req,res=>{
    try {
        
        let data = await Notification.findAll()

        res.status(200).json({
            status:'success',
            data
        })

    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
})

exports.sendNotification  = async(req,res)=>{
    try {
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}