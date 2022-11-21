const router = require('express').Router();
const moment = require('moment-timezone');
const apiRoutes = require('./api');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
  const loggedIn = req.session.logged_in ?? false;
  try {
    let posts = await Post.findAll({
      include: User,
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

router.get('/post/:id', async (req, res) => {
  const loggedIn = req.session.logged_in ?? false;
  try {
    let post = await Post.findByPk(req.params.id, {
      include: [{ model: Comment, include: User }, User],
    });

    if (post) {
      post = post.get({ plain: true });
      post.createdAt = moment(post.createdAt)
        .tz('Australia/Sydney')
        .format('DD/MM/YYYY');

      post.comments = post.comments.map((comment) => {
        comment.createdAt = moment(comment.createdAt)
          .tz('Australia/Sydney')
          .format('DD/MM/YYYY');
        return comment;
      });
    }

    res.render('post', { loggedIn, post });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/dashboard', withAuth, async (req, res) => {
  const loggedIn = req.session.logged_in ?? false;
  res.render('dashboard', { loggedIn });
});

router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;
