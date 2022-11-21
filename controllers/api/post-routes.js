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

router.put('/:id', async (req, res) => {
  try {
    // Check for active session
    if (req.session?.logged_in) {
      // update a booking by `id` for the active user
      let data = await Post.findOne({
        where: {
          id: req.params.id,
          user_id: req.session?.user_id,
        },
      });
      if (data) {
        data = await Post.update(
          {
            ...req.body,
            user_id: req.session.user_id,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        );
        if (data[0]) {
          res.statusMessage = 'Success';
          res.status(200).end();
        } else {
          res.statusMessage = 'Invalid payload!';
          res.status(400).end();
        }
      } else {
        res.statusMessage = 'No Post with this id!';
        res.status(404).end();
      }
    } else {
      res.statusMessage = 'Invalid session!';
      res.status(401).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // Check for active session
    if (req.session?.logged_in) {
      // delete Post by `id`  for the active user
      const data = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session?.user_id,
        },
      });
      if (data) {
        res.statusMessage = 'Success';
        res.status(200).end();
      } else {
        res.statusMessage = 'No Post with this id!';
        res.status(404).end();
      }
    } else {
      res.statusMessage = 'Invalid session!';
      res.status(401).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
