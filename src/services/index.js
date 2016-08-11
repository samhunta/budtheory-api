'use strict'

const authentication = require('./authentication')
const order = require('./order')
const user = require('./user')
const coupon = require('./coupon')
const mongoose = require('mongoose')
module.exports = function() {
  const app = this

  mongoose.connect(app.get('mongodb'))
  mongoose.Promise = global.Promise
  app.configure(order)
  app.configure(authentication)
  app.configure(user)
  app.configure(coupon)
}
