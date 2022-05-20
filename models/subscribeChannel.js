const {sequelize , DataTypes } = require('../connection')

const subscribe = sequelize.define('subscribe',{
  id :{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  channelId :{
    type: DataTypes.UUID,
    references:{
      model:'channels',
      key:'id'
    }
  },
  userId:{
    type: DataTypes.INTEGER,
    references:{
      model:'users',
      key:'id'
    }
  }
})

module.exports = subscribe
