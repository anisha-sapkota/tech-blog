const { Post } = require('../models');

const postData = [
  {
    title: 'Why MVC is so important',
    content:
      'MVC allows developers to maintain a true separation of concerns, devising their code between the model layer for data,the view layer for design, and the controller layer for application logic.',
    user_id: 1,
  },
  {
    title: 'Authentication vs. Authorization',
    content:
      'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
    user_id: 2,
  },
  {
    title: 'Object-Relational Mapping',
    content:
      'I have really loved learning about ORMs. It\'s really simplified the way I create queries in SQL!',
    user_id: 2,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
