'use strict';

var authentication = require('./authentication');
var order = require('./order');
var user = require('./user');
var coupon = require('./coupon');
var mongoose = require('mongoose');
module.exports = function () {
  var app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;
  app.configure(order);
  app.configure(authentication);
  app.configure(user);
  app.configure(coupon);
};