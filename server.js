const debug = require('debug')('reader:server');
const app = require('./app');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  debug(`server is started listening on port ${PORT}...`);
});
