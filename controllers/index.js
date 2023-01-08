const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const userRoutes= require('./userRoutes')
router.use('/', homeRoutes);
router.use('/api/users', userRoutes);
router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;
