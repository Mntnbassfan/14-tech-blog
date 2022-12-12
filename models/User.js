const pls = require('passport-local-sequalize')
const { DataTypes } = require('sequalize')
const sequalize = require('../db')

const User = pls.defineUser(sequalize, {
  // columns go here
})

module.exports = User;
