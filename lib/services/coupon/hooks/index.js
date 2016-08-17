'use strict';

var globalHooks = require('../../../hooks');
var hooks = require('feathers-hooks');

exports.before = {
  create: function create(hook) {},
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