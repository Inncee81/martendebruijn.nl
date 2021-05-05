require('dotenv').config();
const express = require('express'),
  router = require('./modules/router.js'),
  path = require('path'),
  compression = require('compression'),
  app = express();

const port = 5500;

app
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({ extended: true }))
  .use(compression())
  .set('views', __dirname + '/views/')
  .set('view engine', 'ejs')
  .get('/', router.home);

app.listen(port, () => console.log(`App listening on port ${port}`));
