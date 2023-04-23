const router = require('express').Router();
const { Album } = require('../Models');

// Get all albums for the homepage
router.get('/', async (req, res) => {
  try {
    const albumData = await Album.findAll({});

    const albums = albumData.map((album) => album.get({ plain: true }));

    res.render('dashboard', { albums, logged_in: req.session.logged_in });

    // res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving albums', error });
  }
});

module.exports = router;