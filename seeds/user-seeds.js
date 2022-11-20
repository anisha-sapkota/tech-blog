const { User } = require('../models');

const userData = [
  {
    first_name: 'John',
    last_name: 'Smith',
    username: 'jsmith',
    password: 'ILovePotato'
  },
  {
    first_name: 'Jane',
    last_name: 'Doe',
    username: 'jdoe',
    password: 'Watermelon'
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;