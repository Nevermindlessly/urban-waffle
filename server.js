// Dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers'); // This is the routes folder
const sequelize = require('./config/connection'); //
const SequelizeStore = require('connect-session-sequelize')(session.Store); //
const helpers = require('./utils/helpers');
const app = express(); // Create an instance of the Express app
const PORT = process.env.PORT || 3001; // Set the port to either the environment variable PORT or 3001

const hbs = exphbs.create({ helpers }); // Create a handlebars instance with helpers

// Set the view engine to handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set up session configuration

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Use session middleware with the configured options
app.use(session(sess));

app.use(express.json()); // Parse incoming JSON requests

app.use(express.urlencoded({ extended: true })); // Parse incoming URL-encoded requests

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

app.use((req, res, next) => {
  res.locals.logged_in = req.session.logged_in;
  res.locals.user_id = req.session.user_id;
  next();
});

app.use(routes); // Use the routes defined in the controllers folder

// Sync the Sequelize models with the database and start listening for requests on the specified port
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
