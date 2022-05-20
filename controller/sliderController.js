const Slider = require('../models/slider')

exports.getAllSlider = async (req, res) => {
    try {
        let slider =  Slider.findAll()
        if(req.query.type)
            slider = Slider.findAll({where:{slide_for:req.query.type}})

        let data = await slider

        res.status(200).json({
            status: 'success',
            data
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
        await Slider.create(req.body)
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

