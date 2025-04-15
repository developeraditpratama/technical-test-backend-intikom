var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); // Menambahkan cors
var bodyParser = require('body-parser'); // Menambahkan body-parser

// Import routes untuk API produk
var productRoutes = require('./routes/products');

var app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', productRoutes);

module.exports = app;
