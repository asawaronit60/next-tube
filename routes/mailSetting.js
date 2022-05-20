const mailSettingController = require('../controller/mailSettingController')
const express = require('express')
const router = express.Router()

router.get('/getAllSetting',mailSettingController.getAllMail)
router.post('/createSetting',mailSettingController.createMailSetting)
router.patch('/updateSetting/:id',mailSettingController.updateMailSetting)

module.exports = router