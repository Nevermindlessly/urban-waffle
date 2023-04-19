const router = require('express').Router(); // Import the Express.js router object
const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
