const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));

    res.render('dashboard', { users, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});
// // Route for registering a user
// router.post('/register', (req, res) => {
//   User.create(req.body)
//     .then((dbUser) => {
//       req.session.user_id = dbUser.id;
//       req.session.username = dbUser.username;
//       req.session.logged_in = true;
//       res.json(dbUser);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // Route for logging in a user
// router.post('/login', (req, res) => {
//   User.findOne({
//     where: {
//       username: req.body.username,
//     },
//   })
//     .then((dbUser) => {
//       if (!dbUser) {
//         return res.status(400).json({ message: 'No user with that username!' });
//       }
//     })

// });

// // Route for logging out a user
// router.get('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy((err) => {
//       if (err) {
//         res.status(500).json(err);
//       } else {
//         res.status(200).end();
//       }
//     });
//   } else {
//     res.status(400).end();
//   }
// });

module.exports = router;
