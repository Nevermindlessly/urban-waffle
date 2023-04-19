const router = require('express').Router();
const { Review, Album, User } = require('../../Models');
const withAuth = require('../../utils/auth');

// post a new review
// Post a review for a specific album by a user
router.post('/:albumId/user/:userId', withAuth, async (req, res) => {
  try {
    const albumId = req.params.albumId;
    const userId = req.params.userId;

    const { rating, reviewText } = req.body;

    if (!rating || !reviewText) {
      return res.status(400).json({ message: 'Please provide a rating and review text' });
    }

    const newReview = await Review.create({
      rating: rating,
      reviewText: reviewText,
      albumId: albumId,
      userId: userId,
    });

    res.status(201).json({ message: 'Review created successfully', review: newReview });
  } catch (error) {
    res.status(500).json({ message: 'Error creating review', error });
  }
});

// Get all reviews for a specific album
router.get('/:albumId', withAuth, async (req, res) => {
  try {
    const albumId = req.params.albumId;
    const reviewData = await Review.findAll({
      where: {
        albumId: albumId,
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Album,
          attributes: ['title,artist'],
        },
      ],
    });

    if (!reviewData.length) {
      return res.status(404).json({ message: 'No reviews found for this album' });
    }

    const reviews = reviewData.map((review) => review.get({ plain: true }));
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving reviews', error });
  }
});

// Delete a specific review by a user
router.delete('/review/:reviewId/user/:userId', withAuth, async (req, res) => {
  try {
    const reviewId = req.params.albumId;
    const userId = req.params.userId;

    const deletedRows = await Review.destroy({
      where: {
        id: reviewId,
        userId: userId,
      },
    });

    if (deletedRows === 0) {
      return res.status(404).json({ message: 'No review found for this user' });
    }

    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting review', error });
  }
});

module.exports = router;
