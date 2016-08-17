'use strict';

// order-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderModelSchema = new Schema({
  uid: { type: String },
  order: { type: Object, blackbox: true },
  updatedAt: { type: Date, 'default': Date.now }
});

var orderModel = mongoose.model('order', orderModelSchema);

orderModel.types = {
  order_OFF: 1,
  order_PERCENT: 2,
  order_REF: 3
};

module.exports = orderModel;