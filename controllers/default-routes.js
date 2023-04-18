const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Review, Album, Artist } = require('../../Models');

// get all reviews for homepage
router.get('/', async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Album,
          attributes: ['title'],
          include: {
            model: Artist,
            attributes: ['name'],
          },
        },
      ],
    });

    const reviews = reviewData.map((review) => review.get({ plain: true }));
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving reviews', error });
  }
});
