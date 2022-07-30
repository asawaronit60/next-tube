const RoleController = require('../controller/roleController')

const router = require('express').Router()


router.get('/' , RoleController.getAllRoles)
router.post('/' , RoleController.createRole)
router.delete('/:id' , RoleController.deleteRoles)
router.patch('/:id' , RoleController.updateRoles)


module.exports  = router