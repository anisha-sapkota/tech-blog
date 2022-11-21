const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
  if (req.session?.logged_in) {
    // do something
    const user_id = req.session.user_id;
    try {
      await Comment.create({
        ...req.body,
        user_id,
      });
      res.statusMessage = 'Successfully added comment';
      res.status(200).end();
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(401).json({ message: 'Invalid session!' });
  }
});

module.exports = router;
