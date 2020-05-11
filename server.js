const mongoose = require('mongoose');
const debug = require('debug')('reader:server');
const app = require('./app');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  debug(`server is started listening on port ${PORT}...`);
  mongoose
    .connect('mongodb://127.0.0.1:27017/reader', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => debug('connected to the database...'));
});
