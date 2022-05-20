const {sequelize,DataTypes} = require('../connection')

const testimonial = sequelize.define('testimonial',{

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    comment:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    image: {
        type: DataTypes.STRING(150),
        allowNull: true,
        defaultValue:"https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min:1,
            max: 5
          }
    },
    status: {
        type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
        allowNull: false,
        defaultValue: 'ACTIVE'
    },
  
})

module.exports = testimonial