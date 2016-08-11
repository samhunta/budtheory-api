'use strict'

const globalHooks = require('../../../hooks')
const hooks = require('feathers-hooks')

exports.before = {
  create(hook) {
  },

  update(hook) {
  }
}

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
}
