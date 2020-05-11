const AppError = require('../utils/AppError');

const sendDevelopmentError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack
  });
};

const sendProductionError = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'something went wrong'
    });
  }
};

const handleDbValidation = err => {
  const message = Object.values(err.errors)
    .map(error => {
      return error.message;
    })
    .join(' .');

  return new AppError(message, 400);
};

const handleDbDeplicateKey = err => {
  const value = err.message.match(new RegExp('"(.*?)"'));
  const message = `duplicate value: ${value[0]}, please use another one`;
  return new AppError(message, 400);
};

const errorController = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendDevelopmentError(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    if (err.name === 'ValidationError') err = handleDbValidation(err);
    if (err.code === 11000) err = handleDbDeplicateKey(err);
    sendProductionError(err, res);
  }
};

module.exports = errorController;
