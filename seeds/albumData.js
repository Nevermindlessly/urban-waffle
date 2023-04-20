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
    title: 'Back in Black',
    genre: 'Rock',
    artist: 'AC/DC',
  },
  {
    title: 'Bad',
    genre: 'Pop',
    artist: 'Michael Jackson',
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
    title: 'The Eminem Show',
    genre: 'Hip Hop',
    artist: 'Eminem',
  },
  {
    title: 'Kid A',
    genre: 'Electronic',
    artist: 'Radiohead',
  },
  {
    title: 'Discovery',
    genre: 'Electronic',
    artist: 'Daft Punk',
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
  },
  {
    title: 'OK Computer',
    genre: 'Alternative Rock',
    artist: 'Radiohead',
  },
  {
    title: 'Is This It',
    genre: 'Indie Rock',
    artist: 'The Strokes',
  },
  {
    title: 'Funeral',
    genre: 'Indie Rock',
    artist: 'Arcade Fire',
  },
  {
    title: 'In the Aeroplane Over the Sea',
    genre: 'Indie Rock',
    artist: 'Neutral Milk Hotel',
  },
  {
    title: 'Rumours',
    genre: 'Rock',
    artist: 'Fleetwood Mac',
  },
  {
    title: 'Legend',
    genre: 'Reggae',
    artist: 'Bob Marley & The Wailers',
  },
  {
    title: 'Court and Spark',
    genre: 'Folk Rock',
    artist: 'Joni Mitchell',
  },
  {
    title: 'Blue',
    genre: 'Folk Rock',
    artist: 'Joni Mitchell',
  },
  {
    title: 'Nevermind the Bollocks, Heres the Sex Pistols',
    genre: 'Punk Rock',
    artist: 'Sex Pistols',
  },
  {
    title: 'London Calling',
    genre: 'Punk Rock',
    artist: 'The Clash',
  },
  {
    title: 'Ride the Lightning',
    genre: 'Heavy Metal',
    artist: 'Metallica',
  },
  {
    title: 'Appetite for Destruction',
    genre: 'Hard Rock',
    artist: 'Guns N Roses',
  },
  {
    title: 'The Joshua Tree',
    genre: 'Rock',
    artist: 'U2',
  },
  {
    title: 'Abbey Road',
    genre: 'Rock',
    artist: 'The Beatles',
  },
  {
    title: 'Revolver',
    genre: 'Rock',
    artist: 'The Beatles',
  },
  {
    title: 'Pet Sounds',
    genre: 'Rock',
    artist: 'The Beach Boys',
  },
  {
    title: 'Black Sabbath',
    genre: 'Heavy Metal',
    artist: 'Black Sabbath',
  },
  {
    title: 'Paranoid',
    genre: 'Heavy Metal',
    artist: 'Black Sabbath',
  },
  {
    title: 'The Doors',
    genre: 'Rock',
    artist: 'The Doors',
  },
  {
    title: 'Led Zeppelin IV',
    genre: 'Rock',
    artist: 'Led Zeppelin',
  },
  {
    title: 'Dark Side of the Moon',
    genre: 'Rock',
    artist: 'Pink Floyd',
  },
  {
    title: 'Physical Graffiti',
    genre: 'Rock',
    artist: 'Led Zeppelin',
  },
  {
    title: 'The Queen Is Dead',
    genre: 'Indie Rock',
    artist: 'The Smiths',
  },
  {
    title: 'Odelay',
    genre: 'Alternative Rock',
    artist: 'Beck',
  },
  {
    title: 'Songs in the Key of Life',
    genre: 'R&B',
    artist: 'Stevie Wonder',
  },
  {
    title: 'Purple',
    genre: 'R&B',
    artist: 'Prince',
  },
  {
    title: 'Off the Wall',
    genre: 'Pop',
    artist: 'Michael Jackson',
  },
  {
    title: 'The Miseducation of Lauryn Hill',
    genre: 'Hip Hop',
    artist: 'Lauryn Hill',
  },
  {
    title: 'Straight Outta Compton',
    genre: 'Hip Hop',
    artist: 'N.W.A',
  },
  {
    title: 'Fear of a Black Planet',
    genre: 'Hip Hop',
    artist: 'Public Enemy',
  },
  {
    title: 'The Chronic 2001',
    genre: 'Hip Hop',
    artist: 'Dr. Dre',
  },
  {
    title: 'Reasonable Doubt',
    genre: 'Hip Hop',
    artist: 'Jay-Z',
  },
  {
    title: 'The Marshall Mathers LP',
    genre: 'Hip Hop',
    artist: 'Eminem',
  },
  {
    title: 'The Diary',
    genre: 'Hip Hop',
    artist: 'Scarface',
  },
  {
    title: 'Black on Both Sides',
    genre: 'Hip Hop',
    artist: 'Mos Def',
  },
];

const seedAlbums = () => Album.bulkCreate(albumData);

module.exports = seedAlbums;
