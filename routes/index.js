const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))

// other routers
module.exports = router


