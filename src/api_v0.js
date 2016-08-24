const proxy = require('express-request-proxy')

module.exports = (options) => {
  const middleware = proxy({
    cache: false,
    timeout: 10000,
    url: `https://198.199.100.16/*`,
    spoofCookies: options.spoofCookies,
    headers: {
      host: 'budtheory.com'
    }
  })

  return middleware
}
