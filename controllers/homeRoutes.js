const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

router.get('/signup',async (req, res) => {
res.render('signUp')
})

router.get('/dashboard',async (req, res) => {
  res.render('dashboard')
  })
module.exports = router;
