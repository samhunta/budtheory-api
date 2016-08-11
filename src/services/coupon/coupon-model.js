'use strict'

// coupon-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const couponModelSchema = new Schema({
  uid: { type: String, required: true, unique: true },
  coupon: { type: String, required: true, unique: true },
  type: { type: String, required: true, },
  updatedAt: { type: Date, 'default': Date.now }
})

const couponModel = mongoose.model('coupon', couponModelSchema)

couponModel.types = {
  COUPON_OFF: 1,
  COUPON_PERCENT: 2,
  COUPON_REF: 3,
}

module.exports = couponModel
