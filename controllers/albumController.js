const router = require('express').Router();
const { Review, User, Album } = require('../Models');
const withAuth = require('../utils/auth');
////
router.get('/:albumId', async (req, res) => {
  try {
    const albumData = await Album.findByPk(req.params.albumId);
    const reviewsData = await Review.findAll({
      where: { albumId: req.params.albumId },
      include: [{ model: User, attributes: ['username'] }],
    });

    const album = albumData.get({ plain: true });
    const reviews = reviewsData.map((review) => review.get({ plain: true }));
    console.log(reviews);
    res.render('albumspecificreview', {
      album,
      reviews,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/:albumId/reviews', async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const newReview = await Review.create({
      userId: req.session.user_id,
      albumId: req.params.albumId,
      rating: req.body.rating,
      review_text: req.body.review_text,
    });
    res.status(201).json(newReview);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:albumId/reviews', async (req, res) => {
  try {
    console.log('albumId:', req.params.albumId);

    const album = await Album.findByPk(req.params.albumId);

    if (!album) {
      res.status(404).json({ message: 'Album not found' });
      return;
    }

    const albumReviews = await Review.findAll({
      where: {
        albumId: req.params.albumId,
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    console.log('albumReviews:', albumReviews);

    res.status(200).json(albumReviews);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
router.put('/:albumId/reviews/:id', async (req, res) => {
  try {
    console.log('Session data:', req.session);
    console.log('User ID:', req.body.user_id);
    // console.log('User ID:', req.session.user_id);
    const updatedReview = await Review.update(
      {
        rating: req.body.rating,
        review_text: req.body.review_text,
      },
      {
        where: {
          id: req.params.id,
          albumId: req.params.albumId,
          userId: req.body.user_id,
          //   userId: req.session.user_id,
        },
      }
    );

    if (!updatedReview[0]) {
      res.status(404).json({ message: 'No review found with this id' });
      return;
    }

    res.status(200).json({ message: 'Review updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:albumId/reviews/:id', async (req, res) => {
  try {
    const deletedReview = await Review.destroy({
      where: {
        id: req.params.id,
        albumId: req.params.albumId,
        userId: req.body.user_id,
        // userId: req.session.user_id,
      },
    });

    if (!deletedReview) {
      res.status(404).json({ message: 'No review found with this id' });
      return;
    }

    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
