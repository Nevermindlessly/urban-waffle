const { Album } = require('../Models');

const albumData = [
  {
    title: "You Won't Get What You Want",
    genre: 'Noise',
    artist: 'Daughters',
  },
  {
    title: 'Morbid Stuff',
    genre: 'Punk Rock',
    artist: 'PUP',
  },
  {
    title: 'Spirit Phone',
    genre: 'Indie Rock',
    artist: 'Lemon Demon',
  },
  {
    title: 'When We All Fall Asleep, Where Do We Go?',
    genre: 'Pop',
    artist: 'Billie Eilish',
  },
  {
    title: 'Kind of Blue',
    genre: 'Jazz',
    artist: 'Miles Davis',
  },
  {
    title: 'DAMN.',
    genre: 'Hip Hop',
    artist: 'Kendrick Lamar',
  },
  {
    title: 'Thriller',
    genre: 'Pop',
    artist: 'Michael Jackson',
  },
  {
    title: 'Hysteria',
    genre: 'Rock',
    artist: 'Def Leppard',
  },
  {
    title: 'The Wall',
    genre: 'Rock',
    artist: 'Pink Floyd',
  },
  {
    title: 'Purple Rain',
    genre: 'Pop',
    artist: 'Prince',
  },
  {
    title: 'Ten',
    genre: 'Grunge',
    artist: 'Pearl Jam',
  },
  {
    title: 'Nevermind',
    genre: 'Grunge',
    artist: 'Nirvana',
  },
  {
    title: 'The Chronic',
    genre: 'Hip Hop',
    artist: 'Dr. Dre',
  },
  {
    title: 'Illmatic',
    genre: 'Hip Hop',
    artist: 'Nas',
  },
  {
    title: 'The Low End Theory',
    genre: 'Hip Hop',
    artist: 'A Tribe Called Quest',
  },
  {
    title: 'Ready to Die',
    genre: 'Hip Hop',
    artist: 'The Notorious B.I.G.',
  },
  {
    title: 'The College Dropout',
    genre: 'Hip Hop',
    artist: 'Kanye West',
  },
  {
    title: 'Kid A',
    genre: 'Electronic',
    artist: 'Radiohead',
  },
  {
    title: 'Homogenic',
    genre: 'Electronic',
    artist: 'Björk',
  },
  {
    title: 'Mezzanine',
    genre: 'Electronic',
    artist: 'Massive Attack',
  },
  {
    title: 'Vespertine',
    genre: 'Electronic',
    artist: 'Björk',
  }
];

const seedAlbums = () => Album.bulkCreate(albumData);

module.exports = seedAlbums;
