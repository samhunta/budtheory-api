'use strict';

var service = require('feathers-mongoose');
var coupon = require('./coupon-model');
var hooks = require('./hooks');

module.exports = function () {
  var app = this;

  var options = {
    Model: coupon,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/coupons', service(options));

  // Get our initialize service to that we can bind hooks
  var couponService = app.service('/coupons');

  // Set up our before hooks
  couponService.before(hooks.before);

  // Set up our after hooks
  couponService.after(hooks.after);
};