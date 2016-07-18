const proxy = require('express-request-proxy');

module.exports = proxy({
  cache: false,
  timeout: 3000,
  url: `https://btdev.webjoint.com/*`,
});
