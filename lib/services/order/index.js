'use strict';

var service = require('feathers-mongoose');
var order = require('./order-model');
var hooks = require('./hooks');

module.exports = function () {
  var app = this;

  var options = {
    Model: order,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/orders', service(options));

  // Get our initialize service to that we can bind hooks
  var orderService = app.service('/orders');

  // Set up our before hooks
  orderService.before(hooks.before);

  // Set up our after hooks
  orderService.after(hooks.after);
};