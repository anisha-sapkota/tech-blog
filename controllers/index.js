const router = require('express').Router();
const moment = require('moment-timezone');
const apiRoutes = require('./api');
const { Post, User } = require('../models');

router.use('/api', apiRoutes);

// home page (static file)
router.get('/', async (req, res) => {
  const loggedIn = req.session.logged_in ?? false;
  try {
    let posts = await Post.findAll({
      include: [{ model: User }],
    });

    posts = posts.map((post) => {
      post = post.get({ plain: true });
      post.createdAt = moment(post.createdAt)
        .tz('Australia/Sydney')
        .format('DD/MM/YYYY');
      return post;
    });

    res.render('posts', { loggedIn, posts });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// home page (static file)
router.get('/login', async (req, res) => {
  res.render('login');
});

router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;
