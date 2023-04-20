const router = require('express').Router();
const { Review, User, Album } = require('../Models');

// router.get('/:albumId', async (req, res) => {
//   try {
//     const albumData = await Album.findByPk(req.params.albumId);
//     const reviewsData = await Review.findAll({
//       where: { albumId: req.params.albumId },
//       include: [{ model: User, attributes: ['username'] }],
//     });

//     const album = albumData.get({ plain: true });
//     const reviews = reviewsData.map((review) => review.get({ plain: true }));

//     res.render('albumspecificreview', {
//       album,
//       reviews,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// router.post('/:albumId/reviews', async (req, res) => {
//   try {
//     const newReview = await Review.create({
//       userId: req.session.user_id,
//       albumId: req.params.albumId,
//       rating: req.body.rating,
//       reviewText: req.body.reviewText,
//     });
//     res.status(201).json(newReview);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/:albumId/reviews', async (req, res) => {
//   try {
//     const albumReviews = await Review.findAll({
//       where: {
//         albumId: req.params.albumId,
//       },
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//     });
//     res.status(200).json(albumReviews);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// router.put('/:albumId/reviews/:id', async (req, res) => {
//   try {
//     const updatedReview = await Review.update(
//       {
//         rating: req.body.rating,
//         reviewText: req.body.reviewText,
//       },
//       {
//         where: {
//           id: req.params.id,
//           albumId: req.params.albumId,
//           userId: req.session.user_id,
//         },
//       }
//     );

//     if (!updatedReview[0]) {
//       res.status(404).json({ message: 'No review found with this id' });
//       return;
//     }

//     res.status(200).json({ message: 'Review updated successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// router.delete('/:albumId/reviews/:id', async (req, res) => {
//   try {
//     const deletedReview = await Review.destroy({
//       where: {
//         id: req.params.id,
//         albumId: req.params.albumId,
//         userId: req.session.user_id,
//       },
//     });

//     if (!deletedReview) {
//       res.status(404).json({ message: 'No review found with this id' });
//       return;
//     }

//     res.status(200).json({ message: 'Review deleted successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
