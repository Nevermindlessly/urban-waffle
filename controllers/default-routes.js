const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Review, Album } = require('../Models');

// Get all albums for the homepage
router.get('/', async (req, res) => {
  try {
    const albumData = await Album.findAll({});

    const albums = albumData.map((album) => album.get({ plain: true }));
    res.render('dashboard', { albums });

    // res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving albums', error });
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
