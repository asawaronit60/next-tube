const Slider = require('../models/slider')
const multer = require('multer')
const path = require('path')
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Uploads is the Upload_folder_name 
      cb(null, 'assets/sliderImages')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
  });
  
  
  const upload = multer({ storage, dest: '../assets/videos/' }).single("image");


exports.getAllSlider = async (req, res) => {
    try {
        let slider = await Slider.findAll()

        res.status(200).json({
            status: 'success',
            slider
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.getSlider = async(req,res)=>{
  try {
    let slider = await Slider.findByPk(req.params.id)
    res.status(200).json({
      status: 'success',
      data:slider
  })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
  })
  }
}

exports.createSlider = async (req, res) => {
    try {

        upload(req,res,async(err)=>{
            
            req.body.image = req.file.filename
            
            await Slider.create(req.body)
            res.status(200).json({
                status: 'success'
            })
        })

      

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.deleteSlider  = async(req,res)=>{
    try {
        
        await Slider.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json({
            status: 'success'
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.updateSlider = async(req,res)=>{
    try {
        await Slider.update(req.body ,{where:{id:req.params.id}})
        res.status(200).json({
            status: 'success'
        })   
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}

