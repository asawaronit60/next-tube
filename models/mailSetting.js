const {sequelize,DataTypes} = require('../connection')

const mailSetting =sequelize.define('mailsetting',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    sender_name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    mail_driver:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    mail_from_address: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    mail_host: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail_port:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    mail_username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    mail_password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    mail_encryption:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports  = mailSetting