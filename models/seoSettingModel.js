const {sequelize,DataTypes} = require('../connection')

const seoSetting = sequelize.define('seoSetting',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    author_name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    metadata_description:{
        type:DataTypes.STRING(1000),
        allowNull:false
    },
    metadata_keyword: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    google_analytics: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    facebook_pixcal:{
        type:DataTypes.STRING(200),
        allowNull:false
    }
})

module.exports = seoSetting