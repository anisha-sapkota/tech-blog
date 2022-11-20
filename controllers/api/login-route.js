const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res.statusMessage = 'Invalid username, please try again';
      res.status(400).end();
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.statusMessage = 'Invalid password, please try again';
      res.status(400).end();
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(202).end();
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
