const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
  if (req.session?.logged_in) {
    const user_id = req.session.user_id;
    try {
      await Post.create({
        ...req.body,
        user_id,
      });
      res.status(202).end();
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.statusMessage = 'Invalid session!';
    res.status(401).end();
  }
});

module.exports = router;
