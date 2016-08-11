'use strict';

var path = require('path');
var serveStatic = require('feathers').static;
var favicon = require('serve-favicon');
var compress = require('compression');
var cors = require('cors');
var feathers = require('feathers');
var configuration = require('feathers-configuration');
var hooks = require('feathers-hooks');
var rest = require('feathers-rest');
var bodyParser = require('body-parser');
var socketio = require('feathers-socketio');
var middleware = require('./middleware');
var services = require('./services');

module.exports = function (options) {
  var app = feathers();

  app.configure(configuration(path.join(__dirname, '..')));

  app.use(compress()).options('*', cors()).use(cors()).use(favicon(path.join(app.get('public'), 'favicon.ico'))).use('/', serveStatic(app.get('public'))).use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true })).configure(hooks()).configure(rest()).configure(socketio()).use('/*', api_v0(options)).configure(middleware).configure(services).use(function (req, res, next) {
    Object.keys(res.headers).forEach(function (key) {
      if (key.indexOf('Access-Control') === 0) {
        res.removeHeader(key);
      }
    });
    res.set('Access-Control-Request-Method', req.method.toUpperCase());
    res.set('Access-Control-Expose-Headers', 'x-set-cookie, content-type');
    res.set('Access-Control-Allow-Headers', 'x-cookie, content-length, content-type');
    next();
  });

  return app;
};
