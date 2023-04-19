const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Review, Album, Artist } = require('../Models');

// Get all albums for the homepage
router.get('/', async (req, res) => {
  try {
    const albumData = await Album.findAll({
      include: [
        {
          model: Artist,
          attributes: ['name'],
        },
      ],
    });

    const albums = albumData.map((album) => album.get({ plain: true }));
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving albums', error });
  }
});

module.exports = router;
