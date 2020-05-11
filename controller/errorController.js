const sendDevelopmentError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack
  });
};

const sendProductionError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
};

const errorController = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendDevelopmentError(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    sendProductionError(err, res);
  }
};

module.exports = errorController;
