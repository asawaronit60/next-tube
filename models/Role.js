const {sequelize,DataTypes} = require('../connection')

const Roles = sequelize.define('roles',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },

  role:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },
  status:{
    type:DataTypes.STRING,
    defaultValue:null
  }

})

module.exports = Roles