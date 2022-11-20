const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  // create a new user
  try {
    await User.create(req.body);
    res.status(202).end();
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
