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
  {
    user_id: 4,
    album_id: 4,
    rating: 8,
    review_text: 'Great beats and lyrics!',
  },
  {
    user_id: 5,
    album_id: 5,
    rating: 6,
    review_text: 'Decent album, but not their best work.',
  },
  {
    user_id: 6,
    album_id: 6,
    rating: 7,
    review_text: 'Solid effort, but lacks originality.',
  },
  {
    user_id: 7,
    album_id: 7,
    rating: 9,
    review_text: 'Amazing vocals and production!',
  },
  {
    user_id: 8,
    album_id: 8,
    rating: 5,
    review_text: 'Disappointing, not what I expected.',
  },
  {
    user_id: 9,
    album_id: 9,
    rating: 10,
    review_text: 'An instant classic, can listen on repeat!',
  },
  {
    user_id: 10,
    album_id: 10,
    rating: 4,
    review_text: 'Too slow and boring for my taste.',
  },
  {
    user_id: 1,
    album_id: 11,
    rating: 7,
    review_text: 'A decent debut album, has potential.',
  },
  {
    user_id: 2,
    album_id: 12,
    rating: 9,
    review_text: 'A solid follow-up album, great job!',
  },
  {
    user_id: 3,
    album_id: 13,
    rating: 6,
    review_text: 'Expected more from this artist, but still decent.',
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
