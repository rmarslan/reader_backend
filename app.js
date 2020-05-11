const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('reader:app');
const AppError = require('./utils/AppError');
const errorController = require('./controller/errorController');
const categoryRouter = require('./routes/categoryRouter');

const app = express();

if (process.env.NODE_ENV === 'development') {
  debug('morgan is enabled');
  app.use(morgan('dev'));
}
app.use(express.json());
app.use('/api/v1/categories', categoryRouter);
app.all('*', (req, res, next) => {
  next(
    new AppError(
      `This route ${req.originalUrl} is not implemented on this server`,
      404
    )
  );
});
app.use(errorController);

module.exports = app;
