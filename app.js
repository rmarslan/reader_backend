const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('reader:app');

const app = express();

if (process.env.NODE_ENV === 'development') {
  debug('morgan is enabled');
  app.use(morgan('dev'));
}

module.exports = app;
