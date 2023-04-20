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
  {
    username: 'musiclover23',
    password: 'soundwave1',
  },
  {
    username: 'bookworm27',
    password: 'readingrocks!',
  },
  {
    username: 'sportsfan1',
    password: 'teamplayer99',
  },
  {
    username: 'travelbug',
    password: 'wanderlust88',
  },
  {
    username: 'artiste',
    password: 'paintbrushes4',
  },
  {
    username: 'foodie4life',
    password: 'yummyfood123',
  },
  {
    username: 'photographynerd',
    password: 'shutterbug2',
  },
  {
    username: 'gamer4ever',
    password: 'controller55',
  },
  {
    username: 'fitnessjunkie',
    password: 'sweat4success',
  },
  {
    username: 'sciencegeek',
    password: 'experiment8',
  },
  {
    username: 'fashionista',
    password: 'stylequeen77',
  },
  {
    username: 'movielover99',
    password: 'cinema1',
  },
  {
    username: 'petlover123',
    password: 'furryfriends4',
  },
  {
    username: 'natureenthusiast',
    password: 'outdoorsy5',
  },
  {
    username: 'historybuff',
    password: 'timeless1',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
