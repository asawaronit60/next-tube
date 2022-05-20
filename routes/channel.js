const channelController = require('../controller/channelController')
const authController = require('../controller/authController')
const express = require('express')
const router = express.Router();

router.get('/getAllChannel',channelController.getAllChannel)
router.get('/getMyChannel',authController.protect, channelController.getMyChannel)
router.post('/createChannel',authController.protect, channelController.createChannel)
router.patch('/updateChannel',channelController.updateChannel)

module.exports = router
