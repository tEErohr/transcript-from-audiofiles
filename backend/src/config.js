const path = require('path');

module.exports = {
  public: process.env.STATIC_FILES_DIR || path.resolve(__dirname, '../static'),
  port: Number(process.env.STATIC_HTTP_PORT || '3001'),
};
