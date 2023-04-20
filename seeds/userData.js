const { User } = require('../Models');

const userData = [
  {
    username: 'jmill100',
    password: 'password123',
  },
  {
    username: 'notabot',
    password: '010011101101011',
  },
  {
    username: 'strongbad',
    password: 'gowdev999',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
