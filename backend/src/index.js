const handler = require('serve-handler');
const http = require('http');

const { createStaticService } = require('./routes');
const config = require('./config');

const app = createStaticService(config)
const server = http.createServer(app)
 
server.listen(config.port, () => {
  console.log(`Running at http://localhost:${config.port}`);
});

