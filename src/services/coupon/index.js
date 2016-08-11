'use strict'

const service = require('feathers-mongoose')
const coupon = require('./coupon-model')
const hooks = require('./hooks')

module.exports = function() {
  const app = this

  const options = {
    Model: coupon,
    paginate: {
      default: 5,
      max: 25
    }
  }

  // Initialize our service with any options it requires
  app.use('/coupons', service(options))

  // Get our initialize service to that we can bind hooks
  const couponService = app.service('/coupons')

  // Set up our before hooks
  couponService.before(hooks.before)

  // Set up our after hooks
  couponService.after(hooks.after)
}
