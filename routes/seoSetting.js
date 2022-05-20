const seoSettingController = require('../controller/seoSettingController')
const express = require('express')
const router = express.Router();

router.get('/getAllSetting',seoSettingController.getAllSeoSetting)
router.post('/createSetting',seoSettingController.createSetting)
router.patch('/updateSetting/:id',seoSettingController.updatedeSetting)

module.exports = router