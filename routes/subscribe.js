const subscribeController = require('../controller/subscribeController')
const authcontroller = require('../controller/authController')
const express = require('express')
const router = express.Router()

router.get('/getSubscribedChannels',authcontroller.protect,subscribeController.getAllSubscribedChannels)
router.post('/subscribeChannel/:channelId',authcontroller.protect,subscribeController.subscribeChannel)
router.delete('/unsubscribeChannel/:channelId',authcontroller.protect,subscribeController.unSubscribeChannel)

module.exports = router