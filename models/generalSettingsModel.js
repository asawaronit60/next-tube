const { sequelize, DataTypes } = require('../connection')

const generalSetting = sequelize.define('generalSetting', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    project_title: {
        type: DataTypes.STRING(350),
        allowNull: false
    },
    project_logo: {
        type: DataTypes.STRING(350),
        allowNull: true
    },
    project_favicon: {
        type: DataTypes.STRING(350),
        allowNull: true
    },
    project_livetv_icon: {
        type: DataTypes.STRING(1000),
        allowNull: true,
    },
    project_preloader_icon: {
        type: DataTypes.STRING(1000),
        allowNull: true,
    },
    currency_code: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    currency_symbol: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    // blocked_ips: {
    //     type: DataTypes.STRING,
    //     get: function () {
    //         return JSON.parse(this.getDataValue('myArrayField'));
    //     },
    //     set: function (val) {
    //         return this.setDataValue('myArrayField', JSON.stringify(val));
    //     },
    //     allowNull:true
    // },
    default_email:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    website_url:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    invoice_address:{
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    appstore_link: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    playstore_link: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    appstore_download :{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    },
    playstore_download :{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
})

module.exports = generalSetting;