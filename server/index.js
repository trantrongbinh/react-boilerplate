/* eslint consistent-return:0 import/order:0 */
const logger = require('./logger');
const app = require('./app');
const argv = require('./argv');
const port = require('./port');

// get the intended host and port number, use localhost and port 3000 if not provided
const host = argv.host || process.env.HOST || 'localhost';

// Start your app.
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason),
);

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', host, port),
);
