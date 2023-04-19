const { Review } = require('../Models');

const reviewData = [
  {
    user_id: 1,
    album_id: 1,
    rating: 9,
    review_text: 'so good',
  },
  {
    user_id: 2,
    album_id: 2,
    rating: 10,
    review_text: 'STREAM IT NOW',
  },
  {
    user_id: 3,
    album_id: 3,
    rating: 3,
    review_text: 'too scary',
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
