const express = require('express')
const generalSettingController = require('../controller/generalSettingController')
const router = express.Router()

router.get('/getAllSetting',generalSettingController.getAllGeneralSetting)
router.post('/createSetting',generalSettingController.createGeneralSetting)
router.patch('/updateSetting/:id',generalSettingController.updateGeneralSettings)
router.delete('/deleteSetting/:id',generalSettingController.deleteGeneralSettings)

module.exports = router