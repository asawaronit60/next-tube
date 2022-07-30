const Role = require('../models/Role')
const api  = require('../utils/crud')

exports.getAllRoles = api.getAll(Role)
exports.createRole = api.create(Role)
exports.deleteRoles = api.delete(Role)
exports.updateRoles = api.update(Role)