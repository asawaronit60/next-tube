const { sequelize, DataTypes } = require('../connection')
const Role = require('../models/Role')

const user = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  address:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  country:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  state:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  city:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  age:{
    type:DataTypes.INTEGER,
    defaultValue:null
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM("UNBLOCK", "BLOCK"),
    allowNull: false,
    defaultValue: 'UNBLOCK'
  }
})


user.belongsTo(Role,{foreignKey:'role_id',targetKey:'id'})

module.exports = user