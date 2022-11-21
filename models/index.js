// import models
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// Post belong to user
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// User has many Post
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// Comment belongs to a Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

// Comment belongs to a User
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// Post has many Comment
Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

module.exports = {
  Post,
  Comment,
  User,
};
