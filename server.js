const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes');
const sequelize = require('./config/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
