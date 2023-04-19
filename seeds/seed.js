// Dependencies
const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedAlbum = require('./albumData');
const seedReview = require('./reviewData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedAlbum();

  await seedReview();

  process.exit(0);
};

seedAll();
