const {Sequelize,DataTypes} = require('sequelize')
const sequelize  = new Sequelize("next_tube","root", "admin",{
    host:"127.0.0.1",
    dialect:"mysql"
})


module.exports = {sequelize , DataTypes};