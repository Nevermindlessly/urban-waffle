const router = require('express').Router();
const { User } = require('../Models');
const bcrypt = require('bcrypt');

// Render the login and signup page
router.get('/login-signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/'); // Redirect to the homepage if the user is already logged in
    return;
  }
  res.render('login-signup');
});

// // Authenticate a user and log them in
// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { username: req.body.username } });

//     if (!userData) {
//       res.status(400).json({ message: 'Incorrect username or password, please try again' });
//       return;
//     }

//     const validPassword = await bcrypt.compare(req.body.password, userData.password);

//     if (!validPassword) {
//       res.status(400).json({ message: 'Incorrect username or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.username = userData.username;
//       req.session.loggedIn = true;

//       res.json({ user: userData, message: 'You are now logged in!' });
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Register a new user and log them in
// router.post('/signup', async (req, res) => {
//   try {
//     const userData = await User.create({
//       username: req.body.username,
//       password: req.body.password,
//     });

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.username = userData.username;
//       req.session.loggedIn = true;

//       res.json({ user: userData, message: 'You have successfully signed up and are now logged in!' });
//     });
//   } catch (err) {
//     if (err.name === 'SequelizeUniqueConstraintError') {
//       res.status(409).json({ message: 'This username is already taken, please choose another one' });
//     } else if (err.name === 'SequelizeValidationError') {
//       res.status(400).json({ message: 'Please make sure your username and password meet the requirements' });
//     } else {
//       res.status(500).json(err);
//     }
//   }
// });

// // Log out the authenticated user
// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

//////////////////// All of the below routes are working in insomnia   ////////////////////////

// Route to get all users
router.get('/all', async (req, res) => {
  try {
    const userData = await User.findAll();
    console.log(userData);
    const users = userData.map((user) => user.get({ plain: true }));

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Get a specific user by id
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    const user = userData.get({ plain: true });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Update a specific user by id
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.json({ message: 'User updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Delete a specific user by id
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
