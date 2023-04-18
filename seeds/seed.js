// Dependencies
const sequelize = require('../config/connection');
const { User, Artist, Review, Album } = require('../models');

// Seed data
const albumData = require('./albumData.json');
const artistData = require('./artistData.json');
const reviewData = require('./reviewData.json');
const userData = require('./userData.json');

// Function to seed database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const artists = await Artist.bulkCreate(artistData, {
    individualHooks: true,
    returning: true,
  });

  const albums = await Album.bulkCreate(albumData, {
    individualHooks: true,
    returning: true,
  });

  const reviews = await Review.bulkCreate(reviewData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

// Call
seedDatabase();