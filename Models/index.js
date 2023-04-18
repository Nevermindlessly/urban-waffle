// Import the models

const User = require('./users');
const Artist = require('./artist');
const Album = require('./album');
const Review = require('./review');

// Associations

// Set a one-to-many relationship between User and Review
// A user can have many reviews
User.hasMany(Review, {
  foreignKey: 'userId', // The foreign key in the Review table
  onDelete: 'CASCADE', // If a user is deleted, delete all of their reviews
});

// A review belongs to a user
Review.belongsTo(User, {
  foreignKey: 'userId',
});

// A artist can have many albums
Artist.hasMany(Album, {
  foreignKey: 'artistId',
  onDelete: 'CASCADE', // If a artist is deleted, delete all of their albums
});

// A album belongs to a artist
Album.belongsTo(Artist, {
  foreignKey: 'artistId',
});

// A album can have many reviews
Album.hasMany(Review, {
  foreignKey: 'albumId',
  onDelete: 'CASCADE', // If a album is deleted, delete all of their reviews
});

// A review belongs to a album
Review.belongsTo(Album, {
  foreignKey: 'albumId',
});

// Export the models for use in other files
module.exports = {
  User,
  Artist,
  Album,
  Review,
};
