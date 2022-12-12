const { Sequelize } = require('sequelize')
require('dotenv').config()
DB_PASSWORD='Root'
DB_PASSWORD='Root'
module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER,process.env.DB_PASSWORD, {
    host:'localhost', 
    dialect:'mysql',
    port:3306
})
