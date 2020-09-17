const util = require('util');
const fs = require('fs');

module.exports = {
  readdir: util.promisify(fs.readdir)
};
