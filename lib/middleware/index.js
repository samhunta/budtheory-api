'use strict';

var handler = require('feathers-errors/handler');
var notFound = require('./not-found-handler');
var api_v0 = require('../api_v0');
var logger = require('./logger');

module.exports = function (options) {
  return function () {
    var app = this;
    app.use('/*', api_v0(options));
    // app.use(notFound());
    // app.use(logger(app));
    // app.use(handler());
    return app;
  };
};