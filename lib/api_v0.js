'use strict';

var proxy = require('express-request-proxy');

module.exports = function (options) {
  return proxy({
    cache: false,
    timeout: 3000,
    url: 'https://198.199.100.16/*',
    spoofCookies: options.spoofCookies,
    headers: {
      host: 'budtheory.com'
    }
  });
};