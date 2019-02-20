const server = require('./server');
const router = require('./routes');

server.start(router.route);