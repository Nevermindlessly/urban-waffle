const router = require('express').Router();
const userRoutes = require('./userRoutes');
const musicRoutes = require('./musicRoutes');
const playlistRoutes = require('./playlistRoutes');
const escommentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/music', musicRoutes);
router.use('/playlists', playlistRoutes);
router.use('/comments', escommentRoutes);

module.exports = router;
