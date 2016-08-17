'use strict';

var globalHooks = require('../../../hooks');
var hooks = require('feathers-hooks');
var request = require('request');

exports.before = {
  find: [hooks.disable()],
  create: function create(hook) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var onfleet = hook.app.get('onfleet');
    return new Promise(function (resolve, reject) {
      request({
        method: 'post',
        uri: onfleet.endpoint + '/tasks',
        body: hook.data,
        json: true,
        auth: {
          user: onfleet.token
        }
      }, function (err, ofres, body) {
        if (err) return reject(err);
        if (body.error) {
          return hooks.disable.apply(hooks, [hook].concat(args));
        }
        hook.data.order = body;
        resolve(hook);
      });
    });
  },
  update: function update(hook) {}
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};