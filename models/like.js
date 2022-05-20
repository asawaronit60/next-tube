const {sequelize ,DataTypes} = require('../connection')

const like = sequelize.define('like',{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  videoId: {
    type:DataTypes.INTEGER,
    allowNull:false,
    references: {
      model:'videos',
      key:'id'
    }
  },
  userId: {
    type:DataTypes.INTEGER,
    allowNull:false,
    references: {
      model:'users',
      key:'id'
    }
  }
})

module.exports = like;