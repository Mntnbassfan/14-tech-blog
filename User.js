const pls = require ('passport-local-sequelize')
const { DataTypes } = require('sequelize')
const sequelize = require('sequelize')

const User = pls.defineUser(sequelize, {
    // columns go here
})

module.exports = user
