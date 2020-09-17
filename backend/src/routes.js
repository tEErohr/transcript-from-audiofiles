const serveHandler = require('serve-handler');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const fs = require('./fs');

/**
 * @param {{public: string}} serveConfig 
 */
function createStaticService ( serveConfig ) {
  const app = express()
  return app
    .use(cors(), morgan('dev')) // verbose logging 
    .get('/', async(req, res) => {
      const files = await fs.readdir(serveConfig.public)
      res.json(files)
    })
    .use((req, res) => {
      // serve static files
      return serveHandler(req, res, serveConfig)
    })
    
}

module.exports = {
  createStaticService
};

