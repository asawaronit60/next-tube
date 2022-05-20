const faqController = require('../controller/faqController')
const express = require('express')
const router = express.Router()

router.get('/getAllFaq',faqController.getAllFaqs)
router.get('/getFaq/:id',faqController.getFaq)
router.post('/createFaq',faqController.createFaqs)
router.delete('/deleteFaq/:id',faqController.deleteFaq)
router.patch('/updateFaq/:id',faqController.updatedeFaq)
module.exports = router