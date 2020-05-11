const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('reader:app');
const categoryRouter = require('./routes/categoryRouter');

const app = express();

if (process.env.NODE_ENV === 'development') {
  debug('morgan is enabled');
  app.use(morgan('dev'));
}
app.use(express.json());
app.use('/api/v1/categories', categoryRouter);

module.exports = app;
