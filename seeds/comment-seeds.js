const { Comment } = require('../models');

const commentData = [
  {
    content: 'Couldn\'t agree more.',
    user_id: 2,
    post_id: 1,
  },
  {
    content: 'It really does!.',
    user_id: 1,
    post_id: 3,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
