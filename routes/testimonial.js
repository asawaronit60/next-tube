const testimonialController = require('../controller/testimonialController')
const express = require('express')
const router = express.Router()

router.get('/getAllTestimonial',testimonialController.getAllTestmonial)
router.get('/getTestimonial/:id',testimonialController.getTestimonial)
router.post('/createTestimonial',testimonialController.createTestinomial)
router.delete('/deleteTestimonial/:id',testimonialController.deleteTestinomial)
router.patch('/updateTestimonial/:id',testimonialController.updateTestinomial)

module.exports = router