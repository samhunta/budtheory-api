'use strict'

const globalHooks = require('../../../hooks')
const hooks = require('feathers-hooks')
var request = require('request')

exports.before = {
  // find: [hooks.disable()],
  create(hook, ...args) {
    const onfleet = hook.app.get('onfleet')
    return new Promise((resolve, reject) => {
      request({
        method: 'post',
        uri: `${onfleet.endpoint}/tasks`,
        body: hook.data,
        json: true,
        auth: {
          user: onfleet.token,
        },
      }, (err, ofres, body) => {
        if (body.error) {
          return hooks.disable(hook, ...args)
        }
      })

      hook.data.order = hook.data
      resolve(hook)
    });
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
