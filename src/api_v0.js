const proxy = require('express-request-proxy');

module.exports = proxy({
  cache: false,
  timeout: 3000,
  url: `https://198.199.100.16/*`,
  headers: {
    host: 'budtheory.com'
  }
})
