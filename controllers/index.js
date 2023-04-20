const router = require('express').Router();
const homeController = require('./homeController');
const albumController = require('./albumController');
const userController = require('./userController');

router.use('/', homeController);
router.use('/album', albumController);
router.use('/user', userController);

router.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = router;
