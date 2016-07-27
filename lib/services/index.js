'use strict';

var authentication = require('./authentication');
var user = require('./user');
var mongoose = require('mongoose');
module.exports = function () {
  var app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
};