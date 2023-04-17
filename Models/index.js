const Users = require('./users');
const Artist = require('./artist');
const Album = require('./album');
const Song = require('./song');
const Genre = require('./genre');

// Associations
User.hasMany(Album, {
  foreignKey: 'userId',
  as: 'albums',
});

User.hasMany(Song, {
  foreignKey: 'userId',
  as: 'songs',
});

User.hasMany(Artist, {
  foreignKey: 'userId',
  as: 'artists',
});

Artist.belongsTo(User, {
  foreignKey: 'userId',
});

Artist.hasMany(Album, {
  foreignKey: 'artistId',
  as: 'albums',
});

Artist.hasMany(Song, {
  foreignKey: 'artistId',
  as: 'songs',
});

Album.belongsTo(Artist, {
  foreignKey: 'artistId',
});

Album.belongsTo(User, {
  foreignKey: 'userId',
});

Album.hasMany(Song, {
  foreignKey: 'albumId',
  as: 'songs',
});

Song.belongsTo(Artist, {
  foreignKey: 'artistId',
});

Song.belongsTo(Album, {
  foreignKey: 'albumId',
});

Song.belongsTo(Genre, {
  foreignKey: 'genreId',
});

Song.belongsTo(User, {
  foreignKey: 'userId',
});

Genre.hasMany(Song, {
  foreignKey: 'genreId',
  as: 'songs',
});

module.exports = {
  Users,
  Artist,
  Album,
  Song,
  Genre,
};
