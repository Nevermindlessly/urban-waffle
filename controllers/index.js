const router = require('express').Router(); // Import the Express.js router object

const apiRoutes = require('./api');
const defaultRoutes = require('./default-routes');

router.use('/', defaultRoutes);
router.use('/api', apiRoutes);

module.exports = router;
