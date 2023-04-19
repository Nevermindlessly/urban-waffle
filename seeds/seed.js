// Dependencies
const sequelize = require('../config/connection');
const { User, Artist, Review, Album } = require('../Models');

// Seed data
const albumData = require('./albumData.json');
const artistData = require('./artistData.json');
const reviewData = require('./reviewData.json');
const userData = require('./userData.json');

// Function to seed database
const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    await Artist.bulkCreate(artistData, {
      individualHooks: true,
      returning: true,
    });
    await Review.bulkCreate(reviewData, {
      individualHooks: true,
      returning: true,
    });
    await Album.bulkCreate(albumData, {
      individualHooks: true,
      returning: true,
    });
    console.log('Database seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Call
seedDatabase();
