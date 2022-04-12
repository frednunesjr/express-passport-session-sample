const express   = require('express');
const path      = require('path');
const router    = require('./router');
const session   = require('cookie-session');

const app       = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './'));
app.use(router);

module.exports = app;