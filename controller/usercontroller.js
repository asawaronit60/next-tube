const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const Role = require('../models/Role')
exports.getAllUsers = async (req, res) => {
    console.log(Object.keys(req.socket))
    console.log(req.socket)
  try {
    let data = User.findAll({
      include:[{
        model:Role,
        attributes:['role']
      }]
    })

    if (req.query.fields) {
      let a = [];
      a = req.query.fields.split(',')
      data = User.findAll({ attributes: a })
    }

    // let users = await User.findAll();
    let users = await data;
    res.status(200).json({
      status: 'success',
      data: users
    })

  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err.message
    })
  }

}

exports.countUser = async (req, res) => {
  try {
    let count = await User.count()
    res.status(200).json({
      status: 'success',
      count
    })
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err.message
    })
  }
}

exports.getUser = async (req, res) => {

  try {

    let user = await User.findByPk(req.params.id)
    res.status(200).json({
      status: 'success',
      data: user
    })
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err.message
    })
  }


}

exports.createUser = async (req, res) => {

  try {

    let { name, email, password, status, role, date_of_birth } = req.body
    let data = await User.create({
      name,
      email,
      password,
      role,
      date_of_birth
    })

    res.status(200).json({
      status: 'success',
      message: 'user added successfully'
    })

  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err.errors[0].message//.message//.errors[0].message
    })
  }

}

exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    })

    res.status(200).json({
      status: 'success',
      message: 'user deleted successfully'
    })

  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err.errors[0].message
    })
  }
}

exports.updateUser = async (req, res) => {

  try {
    let updates = {}
    if (req.body.password) {
      let { password, ...remaining } = req.body;
      password = await bcrypt.hash(password, 10)
      updates = { ...remaining, password }
    }
    else updates = req.body

    let updateUser = await User.update(updates, { where: { id: req.params.id } })

    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      rowsUpdated: updateUser,
    })

  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err.message
    })
  }

}