const router = require('express').Router();

const apiRoutes = require('./api');
const defaultRoutes = require('./default-routes');

router.use('/', defaultRoutes);
router.use('/api', apiRoutes);

module.exports = router;
