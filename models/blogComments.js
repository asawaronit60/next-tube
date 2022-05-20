const {sequelize, DataTypes}  = require('../connection')

const blogComments = sequelize.define('blogComment',{

    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    comment:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    blogId:{
      type:DataTypes.INTEGER,
      references:{
        model:'users',
        key:'id'
      }
    },
    userId:{
      type:DataTypes.INTEGER,
      references:{
        model:'users',
        key:'id'
      }
    }
})


module.exports = blogComments