const router = require('express').Router();
const { Review } = require('../../Models');
const withAuth = require('../../utils/auth');

// post a new review
router.post('/', withAuth, async (req, res) => {
  try {
    const newReview = await Review.create({
      // Create a new review
      ...req.body, // Get the review data from the request body
      userId: req.session.userId, // Get the user id from the session
    });

    res.status(200).json(newReview); // Send the new review data back to the client
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a review
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    if (!reviewData) {
      res.status(404).json({ message: 'No review found with this id!' });
      return;
    }

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
