const router = require('express').Router()

router.use('/api/users', require('../controllers/userRoutes.js'))

// other routers
module.exports = router


