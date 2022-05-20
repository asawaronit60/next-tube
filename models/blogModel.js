const { sequelize, DataTypes } = require('../connection')


const blogs = sequelize.define("blogs", {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(350),
        allowNull: true,
        defaultValue:"https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/03/ukraine_kiev_overhead_cover.jpg?w=960&h=600&crop=1"
    },
    status: {
        type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
        allowNull: false,
        defaultValue: 'ACTIVE'
    },

})


module.exports = blogs

