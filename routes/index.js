const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const userRoutes = require('./commentRoutes.js');
const postRoutes = require('./postRoutes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;