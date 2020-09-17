const path = require('path');

module.exports = {
  baseUrl: process.env.BASEURL || 'http://localhost:3000',
  chrome: {
    profilesPath: path.resolve(__dirname,'../ChromeProfiles'),
    profileName: 'Default'
  }
};
