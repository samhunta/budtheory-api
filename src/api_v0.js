const proxy = require('express-request-proxy');

module.exports = proxy({
  cache: false,
  timeout: 3000,
  url: `http://budtheory.webjoint.com/*`,
  // spoofHost: 'budtheory.com',
})
