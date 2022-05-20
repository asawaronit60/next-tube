const pageController = require('../controller/pagesController')
const express = require('express')
const router = express.Router();

router.get('/getAllPages',pageController.getAllPages)
router.get('/getPage/:id',pageController.getPage)
router.post('/createPage',pageController.createPage)
router.delete('/deletePage/:id',pageController.deletePage)
router.patch('/updatePage/:id',pageController.updatePage)
module.exports = router
