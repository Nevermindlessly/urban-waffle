const { Review } = require('../Models');

const reviewData = [
  {
    userId: 1,
    albumId: 1,
    rating: 9,
    review_text: 'so good',
  },
  {
    userId: 2,
    albumId: 2,
    rating: 10,
    review_text: 'STREAM IT NOW',
  },
  {
    userId: 3,
    albumId: 3,
    rating: 3,
    review_text: 'too scary',
  },
  {
    userId: 4,
    albumId: 4,
    rating: 8,
    review_text: 'Great beats and lyrics!',
  },
  {
    userId: 5,
    albumId: 5,
    rating: 6,
    review_text: 'Decent album, but not their best work.',
  },
  {
    userId: 6,
    albumId: 6,
    rating: 7,
    review_text: 'Solid effort, but lacks originality.',
  },
  {
    userId: 7,
    albumId: 7,
    rating: 9,
    review_text: 'Amazing vocals and production!',
  },
  {
    userId: 8,
    albumId: 8,
    rating: 5,
    review_text: 'Disappointing, not what I expected.',
  },
  {
    userId: 9,
    albumId: 9,
    rating: 10,
    review_text: 'An instant classic, can listen on repeat!',
  },
  {
    userId: 10,
    albumId: 10,
    rating: 4,
    review_text: 'Too slow and boring for my taste.',
  },
  {
    userId: 1,
    albumId: 11,
    rating: 7,
    review_text: 'A decent debut album, has potential.',
  },
  {
    userId: 2,
    albumId: 12,
    rating: 9,
    review_text: 'A solid follow-up album, great job!',
  },
  {
    userId: 3,
    albumId: 13,
    rating: 6,
    review_text: 'Expected more from this artist, but still decent.',
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
