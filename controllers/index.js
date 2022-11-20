const router = require('express').Router();

// home page (static file)
router.get('/', async (req, res) => {
  const loggedIn = req.session.logged_in ?? false;
  console.log(loggedIn);

  res.render('posts', { loggedIn });
});

// home page (static file)
router.get('/login', async (req, res) => {
  res.render('login');
});

router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;
