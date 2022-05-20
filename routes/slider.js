const sliderController = require('../controller/sliderController')

const express = require('express')
const router = express.Router();


router.get('/getAllSlider',sliderController.getAllSlider)
router.get('/getSlider/:id',sliderController.getSlider)
router.post('/createSlider',sliderController.createSlider)
router.delete('/deleteSlider/:id',sliderController.deleteSlider)
router.patch('/updateSlider/:id',sliderController.updateSlider)


module.exports = router;
