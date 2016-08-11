'use strict';

const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const api_v0 = require('../api_v0');
const logger = require('./logger');

module.exports = function(options) {
  return function () {
    const app = this;
    app.use('/*', api_v0(options));
    // app.use(notFound());
    // app.use(logger(app));
    // app.use(handler());
    return app;
  }
};
