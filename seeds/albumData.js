const { Album } = require('../Models');

const albumData = [
  {
    title: "You Won't Get What You Want",
    genre: 'Rap',
    artist: 'reptile house',
  },
  {
    title: 'Morbid Stuff',
    genre: 'Punk Rock',
    artist: 'alex g',
  },
  {
    title: 'Spirit Phone',
    genre: 'Indie Rock',
    artist: 'The Soft Moon',
  },
];

const seedAlbums = () => Album.bulkCreate(albumData);

module.exports = seedAlbums;
